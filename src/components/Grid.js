import React, { useEffect } from "react";
import GridRow from "./GridRow";

const Grid = ({ mutableGame, gameState, setGameState }) => {
  const board = gameState;

  const testChange = () => {
    console.log("Test");
  };
  // 4 by 4 grid
  return (
    <>
      <button
        onClick={() => {
          console.log(mutableGame);
        }}
      >
        TEST
      </button>
      <button onClick={testChange}>CHANGE SHIT</button>
      <GridRow
        boardState={board}
        mutableGame={mutableGame}
        setGameState={setGameState}
        gridArrayRow={[board[0], board[1], board[2], board[3]]}
      />
      <GridRow
        boardState={board}
        mutableGame={mutableGame}
        setGameState={setGameState}
        gridArrayRow={[board[4], board[5], board[6], board[7]]}
      />
      <GridRow
        boardState={board}
        mutableGame={mutableGame}
        setGameState={setGameState}
        gridArrayRow={[board[8], board[9], board[10], board[11]]}
      />
      <GridRow
        boardState={board}
        mutableGame={mutableGame}
        setGameState={setGameState}
        gridArrayRow={[board[12], board[13], board[14], board[15]]}
      />
    </>
  );
};

export default Grid;
