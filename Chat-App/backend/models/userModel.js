const mongoose = require('mongoose');

const userModel = new mongoose.Schema(
    {
        name: { type: String, trim: true, required: true },
        email: { type: String, trim: true, required: true, unique: true},
        password: { type: String, trim: true, required: true },
        pic: {
            type: String,
            required: true,
            default: "https://www.shutterstock.com/image-vector/user-profile-icon-vector-avatar-600nw-2247726673.jpg"
        },
    },
    { 
        timestamps: true 
    }
);

const User = mongoose.model('User', userModel);

module.exports = User;