import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLoaderData } from "react-router-dom";

function Chatpage() {
  const chats = useLoaderData(); // WE USED useLoaderData instead of useEffect for optimization below useEffect method is also valid 
/* 
  const [chats, setChats] = useState([]);
  async function fetchChats() {
    try {
      const response = await axios.get("http://localhost:3000/api/chats");
      const result = await response.data;
      setChats(result);
    } catch (error) {
      console.error("Error fetching chats:", error.message);
    }
  }
  useEffect(() => {
    fetchChats();
  }, []);
 */


  return (
    <div>
      {chats.length === 0 ? (
        <p>Loading...</p>
      ) : (
        <>
          {console.log(chats)}
          <h1>Chatpage</h1>
          {/* Render your chat data here */}
          {chats.map((chat) => (
            <h1 key={chat._id}>{chat.chatName}</h1>
          ))}
        </>
      )}
    </div>
  );
}



export default Chatpage;
export const chatFetcher = async () => {
  try {
    const response = await axios.get("http://localhost:3000/api/chats");
    const result = await response.data;
    return result
  } catch (error) {
    console.error("Error fetching chats:", error.message);
  }
}