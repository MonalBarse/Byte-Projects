import { useState, useEffect } from "react";
import CreateTodo from "./components/CreateTodo";
import Todos from "./components/Todos";
import "./App.css";

function App() {
  const [todosState, setTodosState] = useState([]);

  useEffect(() => {
    // Use useEffect to fetch data when the component mounts
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/todos");
        const data = await response.json();
        setTodosState(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData(); // Call the fetchData function
  }, []); // Empty dependency array means this effect runs once after the first render

  return (
    <div>
      <h1 className="text-3xl font-bold text-center mt-8 mb-4">Todo List</h1>
      <CreateTodo setTodos={setTodosState} />
      <Todos todos={todosState} />
    </div>
  );
}

export default App;
