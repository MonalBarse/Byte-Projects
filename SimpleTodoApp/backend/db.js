const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://MonalBarse:<password>@todocluster.d7mwdji.mongodb.net/todos');


const todoSchema = new mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean,
});

const Todo = mongoose.model('Todo', todoSchema);

module.exports = {
    Todo
}


 