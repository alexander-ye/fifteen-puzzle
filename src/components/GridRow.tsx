import React from "react";
import GridSquare from "./GridSquare";

export type GridRowData = {
  mutableGame: any;
  setGameState: any;
  boardState: any;
  gridArrayRow: any;
};
const gridRowStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "row",
};

const GridRow = ({
  mutableGame,
  setGameState,
  boardState,
  gridArrayRow,
}: GridRowData) => {
  return (
    <div style={gridRowStyle}>
      {gridArrayRow.map((tile: any) => {
        return (
          <GridSquare
            tile={tile}
            mutableGame={mutableGame}
            setGameState={setGameState}
          />
        );
      })}
    </div>
  );
};

export default GridRow;
