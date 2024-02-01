import "./App.css";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Outlet/>
      {/* 
        Outlet is a placeholder for the child routes of the parent route. Outlet lets you render different components for different multiple routes.
        We defined the routes in main.jsx and we are rendering them here using Outlet
      */}
    </div>
  );
}

export default App;
