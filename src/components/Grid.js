import React, { useEffect } from "react";
import GridRow from "./GridRow";

const Grid = ({ mutableGame, gameState, setGameState }) => {
  const board = gameState.board.boardState;

  // 4 by 4 grid
  return (
    <>
      <button
        onClick={() => {
          console.log(board);
        }}
      >
        TEST
      </button>
      <GridRow gridArrayRow={[board[0], board[1], board[2], board[3]]} />
      <GridRow gridArrayRow={[board[4], board[5], board[6], board[7]]} />
      <GridRow gridArrayRow={[board[8], board[9], board[10], board[11]]} />
      <GridRow gridArrayRow={[board[12], board[13], board[14], board[15]]} />
    </>
  );
};

export default Grid;