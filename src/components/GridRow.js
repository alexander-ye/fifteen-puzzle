import React from "react";
import GridSquare from "./GridSquare";

const gridRowStyle = {
  display: "flex",
  flexDirection: "row",
};

const GridRow = ({ mutableGame, setGameState, boardState, gridArrayRow }) => {
  return (
    <div style={gridRowStyle}>
      {gridArrayRow.map((tile) => {
        return (
          <GridSquare
            tile={tile}
            boardState={boardState}
            mutableGame={mutableGame}
            setGameState={setGameState}
          />
        );
      })}
    </div>
  );
};

export default GridRow;
