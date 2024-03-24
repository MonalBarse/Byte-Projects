import React from "react";
import "./App.css";
import SelectableGrid from "./components/SelectableGrid";
function App() {
  return (
    <>
      <h1 style={{ textAlign: "center", marginTop: "50px", fontSize: "50px" }}>
        Selectable Grid
      </h1>
      <SelectableGrid rows={10} cols={10} />
    </>
  );
}

export default App;
