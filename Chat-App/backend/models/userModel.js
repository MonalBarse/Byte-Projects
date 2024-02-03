const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const userModel = new mongoose.Schema(
    {
        name: { type: String, trim: true, required: true },
        email: { type: String, trim: true, required: true, unique: true },
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

userModel.methods.matchPassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
};

userModel.pre('save', async function (next) {
    if (!this.isModified) {
        next();
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
});

const User = mongoose.model('User', userModel);

module.exports = User;