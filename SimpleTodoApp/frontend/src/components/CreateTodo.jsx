import React, { useState, useEffect } from "react";

function CreateTodo({ setTodos }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [shouldClearFields, setShouldClearFields] = useState(false);

  useEffect(() => {
    // Clear input fields after successfully adding a todo
    if (shouldClearFields) {
      setTitle("");
      setDescription();
    }
  }, [shouldClearFields]);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };
  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleAddTodo = async () => {
    try {
      const response = await fetch("http://localhost:3000/todo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: title,
          description: description,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to add todo");
      }

      const data = await response.json();
      setTodos((prevTodos) => [...prevTodos, data]);
      setShouldClearFields(true);
    } catch (error) {
      console.error("Error adding todo:", error);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-md shadow-md mt-10">
      <h1 className="text-2xl font-bold mb-4">Create Todo</h1>
      <input
        type="text"
        value={title}
        onChange={handleTitleChange}
        placeholder="Enter title"
        className="w-full p-2 mb-2 focus:outline-none focus:ring focus:border-blue-300"
        style={{ boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.1)" }}
      />
      <input
        type="text"
        value={description}
        onChange={handleDescriptionChange}
        placeholder="Enter description"
        className="w-full p-2 mb-4 focus:outline-none focus:ring focus:border-blue-300"
        style={{ boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.1)" }}
      />
      {/* Add your submit button or any other elements here */}
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleAddTodo}
      >
        Add
      </button>
    </div>
  );
}

export default CreateTodo;
