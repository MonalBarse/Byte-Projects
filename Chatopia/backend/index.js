const express =         require('express');             
const app =             express();                              // Express Application
const cors =            require('cors');                        // For Cross-Origin Resource Sharing (here for the front-end to access the back-end)
const connectDB =       require('./config/db');                 // Database Connection
const dotenv =          require('dotenv');                      // For environment variables
const userRoutes =      require('./routes/userRoutes'); 
const chatRoutes =      require('./routes/chatRoutes');
const { notFound, errorHandler } = require('./middleware/errorHandeling');// Middlewars
app.use(cors());                                
app.use(express.json());                        // This is a built-in middleware function in Express. It parses incoming requests with JSON payloads and is based on body-parser i.e converts the incoming data to JSON
dotenv.config();                                // so we can access the environment variables in the .env file (using process.env.ENV_VARIABLE_NAME)
const PORT = process.env.PORT || 3000;
connectDB();
const colors = require('colors');

// For the application we will be using all the routes starting from /api
app.use('/api/user', userRoutes);               // This is the route for the user
app.use('/api/chat', chatRoutes);               // This is the route for the chat

app.use(notFound);     // this is a middleware that will be called if no route is found

app.use(errorHandler); // This is a middleware that will be called if there is an error in the code 
//                        Since we know that the error Handler has error as the first parameter, it should be placed at the end of the middleware stack or the end of the index.js file

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`.cyan.underline);
});
