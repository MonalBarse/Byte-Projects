import React, { useCallback } from "react";

const SelectableGrid = ({ rows = 10, cols = 10 }) => {
  const [isMouseDown, setIsMouseDown] = React.useState(false);
  const [selectedCells, setSelectedCells] = React.useState([]);

  const handleMouseDown = (cellNumber) => {
    setIsMouseDown(true);
    setSelectedCells([cellNumber]);
  };

  const handleMouseEnter = useCallback(
    (cellNumber) => {
      if (isMouseDown) {
        const startCell = selectedCells[0];
        const endCell = cellNumber;

        const startRow = Math.ceil(startCell / cols) - 1; // startRow is
        const startCol = (startCell - 1) % cols; // startCol is
        const endRow = Math.ceil(endCell / cols) - 1; // endRow is
        const endCol = (endCell - 1) % cols; // endCol is

        const minRow = Math.min(startRow, endRow);
        const maxRow = Math.max(startRow, endRow);
        const minCol = Math.min(startCol, endCol);
        const maxCol = Math.max(startCol, endCol);

        const selected = [];
        for (let i = minRow; i <= maxRow; i++) {
          for (let j = minCol; j <= maxCol; j++) {
            selected.push(i * cols + j + 1);
          }
        }
        console.log(selected);
        setSelectedCells(selected);
      }
    },
    [ isMouseDown]
  );

  const handleMouseUp = () => {
    setIsMouseDown(false);
  };

  return (
    <>
      <div
        style={{ "--rows": rows, "--cols": cols }}
        className="grid"
        onMouseUp={handleMouseUp}
      >
        {[...Array(rows * cols).keys()].map((_, i) => (
          <div
            key={i}
            className={`cell ${
              selectedCells.includes(i + 1) ? "selected" : ""
            }`}
            onMouseDown={() => {
              handleMouseDown(i + 1);
            }}
            onMouseEnter={() => {
              handleMouseEnter(i + 1);
            }}
          >
            {i + 1}
          </div>
        ))}
      </div>
    </>
  );
};

export default SelectableGrid;
