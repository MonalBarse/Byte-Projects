const asyncHandler = require('express-async-handler');
const User = require('../models/userModel');
const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        res.status(400);
        throw new Error('Please fill in all fields');
    }

    const userExists = await User
        .findOne({ email });
    if (userExists) {
        res.status(400);
        throw new Error('User already exists');
    }
    const user = await User
        .create({
            name,
            email,
            password
        });
    if (user) {
        res.status(201);
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id)
        });
    }
    else {
        res.status(400);
        throw new Error('Invalid user data');
    }
}
);

module.exports = { registerUser };