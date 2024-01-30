## THIS IS AN OPTIONAL README FILE 
### This is for personal reference and also guide for others as to how I approached to make this app

## Overview
Welcome to the Chat App – a project designed for myself to learn the MERN stack (MongoDB, Express.js, React.js, Node.js). This application serves as a practical learning experience, allowing me to delve into the world of real-time chat applications while mastering the core technologies of the MERN stack.

## Development Notes 

- First I started with backend creating my backend server in an [index.js](./backend/index.js) file. 
    - You've created an Express application.
    - Utilized the cors middleware to handle Cross-Origin Resource Sharing.
    - Loaded environment variables from a .env file using dotenv.
    - Defined routes for the root endpoint ('/'), returning a simple greeting.
    - Defined a route for '/api/chats' to send the entire chats data.
    - Defined a route for '/api/chats/:id' to send a single chat based on the provided id.
        <h4> We will come back to this later to add more stuff. </h4>

- Next I created frontend foleder and initialzed a React Project in it. 
    - We wrote some basic code to check if everything is working fine.
    - Next we added router to our project in [main.jsx](./frontend/src/main.jsx) file. This helped us to navigate between different pages. And we only had to define logic for routing in one place at [main.jsx](./frontend/src/main.jsx)
 


