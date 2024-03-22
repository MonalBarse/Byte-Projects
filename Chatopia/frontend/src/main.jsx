/* 
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";
import { Route, createRoutesFromElements } from "react-router-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./pages/Homepage.jsx";
import Chatpage from "./pages/Chatpage.jsx";
import ChatProvider from "./context/ChatProvider.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<Homepage />} />
      <Route
        path="/chat"
        element={<Chatpage />} // loader={chatFetcher} 
      />{" "}
    </Route>
  )
);

// Note about createBroweserRouter - createBroweserRouter is a function that takes in a route and returns a router. inside createBrowserRouter we defined another funct

ReactDOM.createRoot(document.getElementById("root")).render(
  <ChatProvider>
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  </ChatProvider>
);
 */
/* NOTES:

createBrowserRouter: 
This function is used to create a router instance.
It's typically used at the root of your application to define the routing structure.

createRoutesFromElements: 
Converts JSX route elements into a format that the router understands.

RouterProvider: 
Wraps your application and provides the routing context. 
It takes the router instance as a prop, allowing components within its scope to access routing information.


*/
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Import the Router component
import Homepage from "./pages/Homepage.jsx";
import Chatpage from "./pages/Chatpage.jsx";
import ChatProvider from "./context/ChatProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Router> {/* Wrap all providers within Router */}
    <ChatProvider>
      <ChakraProvider>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="" element={<Homepage />} />
            <Route path="/chat" element={<Chatpage />} />
          </Route>
        </Routes>
      </ChakraProvider>
    </ChatProvider>
  </Router>
);
