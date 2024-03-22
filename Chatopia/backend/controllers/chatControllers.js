const expressAsyncHandler = require("express-async-handler");
const Chat = require("../models/chatModel");
const User = require("../models/userModel");


// This route will be responsible for creating or accesing one on one chat
const accessChat = expressAsyncHandler(async (req, res) => {

    const { userID } = req.body; // Current user who is logged in will send us the userID of the user with whom he wants to chat
    if (!userID) {
        console.log("UserID param not sent with the request");
        res.sendStatus(400);
    }
    try {
        //Find the user with the specified userID
        const otherUser = await User.findById(userID);
        if (!otherUser) {
            console.log("User with the specified ID not found");
            res.sendStatus(404);
            return;
        }
        // Split full names and select the first part
        const currentUserFirstName = req.user.name.split(' ')[0];
        const otherUserFirstName = otherUser.name.split(' ')[0];

        const chatName = `${currentUserFirstName} & ${otherUserFirstName}'s Chat`;


        let isChat = await Chat.findOne({
            isGroupChat: false,
            $and: [
                { users: { $elemMatch: { $eq: req.user._id } } },
                { users: { $elemMatch: { $eq: userID } } }
            ],
        }).populate("users", "-password").populate("latestMessage");  // Populating the users and the latest message
        isChat = await User.populate(
            isChat, {
            path: "latestMessage.sender",
            select: "name email"
        }); // Populating the sender of the latest message
        if (isChat) { // If chat exists, return the chat
            res.send(isChat[0]);
        } else { // If chat does not exist, create a new chat
            let chatData = {
                chatName: chatName,
                isGroupChat: false,
                users: [req.user._id, userID],
            };
            const createdChat = await Chat.create(chatData);
            const FullChat = await Chat.findOne({ _id: createdChat._id }).populate("users", "-password").populate("latestMessage");
            res.status(201).send(FullChat);

        }
    }
    catch (e) {
        console.log(e);
        res.status(500).send("Internal Server Error");
    }
});

const fetchChats = expressAsyncHandler(async (req, res) => {
    try {
        let chats = await Chat.find({
            users: { $elemMatch: { $eq: req.user._id } }
        })
            .populate("users", "-password")
            .populate("groupAdmin", "-password")
            .populate("latestMessage")
            .sort({ updatedAt: -1 });
        chats = await User.populate(chats, {
            path: "latestMessage.sender",
            select: "name email"
        });
        res.status(200).send(chats);
    }
    catch (e) {
        console.log(e);
        res.status(500).send("Internal Server Error");
    }
});
const createGroupChat = expressAsyncHandler(async (req, res) => {
    if (!req.body.users || !req.body.name) {
        res.status(400).send("Please Fill all the data");
        return;
    }
    let users = JSON.parse(req.body.users); // We will send the users as a stringified JSON object and not as an array.

    // if group chat with same name and same users already exists, then return that this group chat already exists
    const groupChatExists = await Chat.findOne({
        isGroupChat: true,
        chatName: req.body.name,
        users: { $all: users }
    });
    if (groupChatExists) {
        res.status(400).send("Same group-chat aleady exists");
        return;
    }
    if (users.length < 2) {
        res.status(400).send("Please select atleast 2 users");
        return;
    }
    users.push(req.user); // Adding the current user to the group
    try {
        const groupChat = await Chat.create({
            chatName: req.body.name,
            isGroupChat: true,
            users: users,
            groupAdmin: req.user
        });
        const fullGroupChat = await Chat
            .findOne({ _id: groupChat._id })
            .populate("users", "-password")
            .populate("groupAdmin", "-password");
        res.status(201).send(fullGroupChat);
    }
    catch (e) {
        console.log(e);
        res.status(500).send("Internal Server Error");
    }
});

const renameGroup = expressAsyncHandler(async (req, res) => {
    const { chatID, newName } = req.body;
    if (!chatID || !newName) {
        res.status(400).send("Please provide chatID and newName");
        return;
    }
    try {
        const updatedChat = await Chat.findByIdAndUpdate(
            chatID,
            { chatName: newName },
            { new: true }
        ).populate("users", "-password").populate("groupAdmin", "-password");
        if (!updatedChat) {
            res.status(404).send("Chat not found");
            return; // If chat not found, return
        }
        res.status(200).send(updatedChat);

    }
    catch (e) {
        console.log(e);
        res.status(500).send("Internal Server Error");
    }
});

const addToGroup = expressAsyncHandler(async (req, res) => {
    const { chatID, userID } = req.body;
    if (!chatID || !userID) {
        res.status(400).send("Please provide chatID and userID");
        return;
    }

    try {
        // Find the chat by ID
        const chat = await Chat.findById(chatID);

        // Check if the chat exists
        if (!chat) {
            res.status(404).send("Chat not found");
            return;
        }

        // Check if the user is already in the group
        if (chat.users.includes(userID)) {
            res.status(400).send("User is already in the group");
            return;
        }

        // Update the chat by adding the user to the users array
        const added = await Chat.findByIdAndUpdate(
            chatID,
            { $push: { users: userID } },
            { new: true }
        ).populate("users", "-password").populate("groupAdmin", "-password");

        res.status(200).send(added); // Send the updated chat details
    } catch (error) {
        console.log(error);
        res.status(500).send("Internal Server Error");
    }
});

const removeFromGroup = expressAsyncHandler(async (req, res) => {
    const { chatID, userID } = req.body;
    if (!chatID || !userID) {
        res.status(400).send("Please provide chatID and userID");
        return;
    }

    try {
        // Find the chat by ID
        const chat = await Chat.findById(chatID);

        // Check if the chat exists
        if (!chat) {
            res.status(404).send("Chat not found");
            return;
        }

        // Check if the current user is the group admin
        if (chat.groupAdmin.toString() !== req.user._id.toString()) {
            res.status(403).send("You are not authorized to remove users from this chat");
            return;
        }

        // Update the chat by removing the user from the users array
        const removed = await Chat.findByIdAndUpdate(
            chatID,
            { $pull: { users: userID } },
            { new: true }
        ).populate("users", "-password").populate("groupAdmin", "-password");

        res.send(removed); // Send the updated chat details
    } catch (error) {
        console.log(error);
        res.status(500).send("Internal Server Error");
    }
});


module.exports = { accessChat, fetchChats, createGroupChat, renameGroup, addToGroup, removeFromGroup };