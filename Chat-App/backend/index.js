const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const dotenv = require('dotenv');
const chats = require('./dummy data/data');
const userRoutes = require('./routes/userRoutes');
dotenv.config();
const app = express();

app.use(cors());
connectDB();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.use('/api/user', userRoutes );

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
