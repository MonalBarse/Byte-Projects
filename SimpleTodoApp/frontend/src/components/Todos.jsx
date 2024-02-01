function Todos({ todos }) {
  return (
    <>
      {todos.map((todo, index) => { // Here index is the index of the element in the array i.e for [1,213,3423] index of 1 is 0, index of 213 is 1 and so on .It is provided by the map function 
        return (
          <div
            key={index} //We give key as index because we know that the index of each element in the array is unique and hence react can render it efficiently ideally you should use a unique id for each element in the array instead of index 
            className="max-w-md mx-auto p-6 bg-white rounded-md shadow-md mt-10"
          >
            <h1 className="text-2xl font-bold mb-4">{todo.title}</h1>
            <p className="text-gray-500 mb-4">{todo.description}</p>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              {todo.completed ? "Done!" : "Mark as Done"}
            </button>
          </div>
        );
      })}
    </>
  );
}

export default Todos;
