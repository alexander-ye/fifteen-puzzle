import React, { useEffect } from "react";
import GridRow from "./GridRow";

const Grid = ({ mutableGame, gameState, setGameState }) => {
  const board = gameState;

  return (
    <>
      <GridRow
        boardState={board}
        mutableGame={mutableGame}
        setGameState={setGameState}
        gridArrayRow={[
          board.find((t) => t.position === 0),
          board.find((t) => t.position === 1),
          board.find((t) => t.position === 2),
          board.find((t) => t.position === 3),
        ]}
      />
      <GridRow
        boardState={board}
        mutableGame={mutableGame}
        setGameState={setGameState}
        gridArrayRow={[
          board.find((t) => t.position === 4),
          board.find((t) => t.position === 5),
          board.find((t) => t.position === 6),
          board.find((t) => t.position === 7),
        ]}
      />
      <GridRow
        boardState={board}
        mutableGame={mutableGame}
        setGameState={setGameState}
        gridArrayRow={[
          board.find((t) => t.position === 8),
          board.find((t) => t.position === 9),
          board.find((t) => t.position === 10),
          board.find((t) => t.position === 11),
        ]}
      />
      <GridRow
        boardState={board}
        mutableGame={mutableGame}
        setGameState={setGameState}
        gridArrayRow={[
          board.find((t) => t.position === 12),
          board.find((t) => t.position === 13),
          board.find((t) => t.position === 14),
          board.find((t) => t.position === 15),
        ]}
      />
    </>
  );
};

export default Grid;
