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

- We Created Schemas for our databse in [models](./backend/models/) folder.
    - Three separate models ([Chat](./backend/models/chatModel.js), [Message](./backend/models/messageModel.js), and [User](./backend/models/userModel.js)) are defined, each with its own schema and functionality.
        - User model Represents individual users in the system. Captures essential user information such as name, email, password, and profile picture. Provides a foundation for authentication and authorization in the application.
        - Chat model Represents a chat or conversation in the system. Supports both one-on-one and group chats (isGroupChat property). Keeps track of participants (users array), the latest message (latestMessage reference), and the admin user in group chats (groupAdmin reference).
        - Message model Represents individual messages exchanged within a chat. Associates each message with a sender (sender reference) and the chat it belongs to (chat reference). Facilitates tracking of message content and creation times.
    - The models are organized into separate files and exported for use in other parts of the application.
    - Relationships between models are established using Mongoose's ref property, allowing for easy population of related data.
    - Timestamps are automatically managed for each model, recording the creation and update times.
 


