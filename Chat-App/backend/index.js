const express = require('express');
const cors = require('cors');

const chats = require('./dummy data/data'); // This is dummy data, we are trying to mimic the data we will get from the database
const dotenv = require('dotenv');
const app = express();
app.use(cors());

dotenv.config();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.get('/api/chats', (req, res) => {
    res.send(chats);
});

app.get('/api/chats/:id', (req, res) => {
    const singleChat = chats.find((chat) => chat._id === req.params.id);
    res.send(singleChat);
});

app.listen(PORT, () => {
    console.log('Server is running on port 3000');
});
