const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const dotenv = require('dotenv');
const chats = require('./dummy data/data');
const userRoutes = require('./routes/userRoutes');
const app = express();

app.use(cors());
app.use(express.json());

dotenv.config();
const PORT = process.env.PORT || 3000;
connectDB();

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.use('/api/user', userRoutes );

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
