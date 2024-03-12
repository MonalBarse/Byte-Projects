const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const userModel = new mongoose.Schema(
    {
        name: { type: String, trim: true, required: true },
        email: { type: String, trim: true, required: true, unique: true },
        password: { type: String, trim: true, required: true },
      
    },
    {
        timestamps: true // This will automatically add the createdAt and updatedAt fields to the schema
    }
);

userModel.methods.matchPassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
};
// userModel.methods.YourMethodName: This defines a method called YourMethodName that will be available on instances of the userModel. 
/* userModel.methods.matchPassword: This defines a method called matchPassword. A function that compares the enteredPassword (during login) with the hashed password stored in the database (this.password). It returns bool. */
userModel.pre('save', async function (next) {
    if (!this.isModified('password')) {                  // isModified is a property provided by Mongoose that indicates whether a field in the document has been modified.
        next();
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
});
/*  
  userModel.pre('save', ...): This middleware function is executed before the document is saved to the database. It's triggered when a new user is being created or an existing user is being updated. Inside this function:

- It first checks if the password has been modified using this.isModified.
- If the password hasn't been modified (meaning the document is being updated but the password isn't changing), it calls next() to proceed with saving the document without rehashing the password.
- If the password has been modified (meaning a new password is being set or updated), it generates a salt using bcrypt.genSalt() with a cost factor of 10. The cost factor determines the complexity of the hashing algorithm.
- It then hashes the new password (this.password) using the generated salt with bcrypt.hash().
- Finally, it assigns the hashed password back to this.password, effectively replacing the plaintext password with its hashed version. 
*/
const User = mongoose.model('User', userModel);

module.exports = User;