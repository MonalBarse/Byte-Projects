const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const dotenv = require('dotenv');
const userRoutes = require('./routes/userRoutes');
const app = express();
const { notFound, errorHandler } = require('./middleware/errorHandeling');
app.use(cors());
app.use(express.json());
dotenv.config();
const PORT = process.env.PORT || 3000;
connectDB();

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.use('/api/user', userRoutes);
app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
