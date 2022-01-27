import React from "react";
import GridRow from "./GridRow";

export type GridData = {
  mutableGame: any;
  gameState: any;
  setGameState: any;
};

const Grid = ({ mutableGame, gameState, setGameState }: GridData) => {
  const board = gameState;

  return (
    <div style={{ border: "2px solid black", width: "fit-content" }}>
      <GridRow
        boardState={board}
        mutableGame={mutableGame}
        setGameState={setGameState}
        gridArrayRow={[
          board.find((t: any) => t.position === 0),
          board.find((t: any) => t.position === 1),
          board.find((t: any) => t.position === 2),
          board.find((t: any) => t.position === 3),
        ]}
      />
      <GridRow
        boardState={board}
        mutableGame={mutableGame}
        setGameState={setGameState}
        gridArrayRow={[
          board.find((t: any) => t.position === 4),
          board.find((t: any) => t.position === 5),
          board.find((t: any) => t.position === 6),
          board.find((t: any) => t.position === 7),
        ]}
      />
      <GridRow
        boardState={board}
        mutableGame={mutableGame}
        setGameState={setGameState}
        gridArrayRow={[
          board.find((t: any) => t.position === 8),
          board.find((t: any) => t.position === 9),
          board.find((t: any) => t.position === 10),
          board.find((t: any) => t.position === 11),
        ]}
      />
      <GridRow
        boardState={board}
        mutableGame={mutableGame}
        setGameState={setGameState}
        gridArrayRow={[
          board.find((t: any) => t.position === 12),
          board.find((t: any) => t.position === 13),
          board.find((t: any) => t.position === 14),
          board.find((t: any) => t.position === 15),
        ]}
      />
    </div>
  );
};

export default Grid;
