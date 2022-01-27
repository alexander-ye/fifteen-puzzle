import React, { useState } from "react";
import GameObject from "../classes/game";
import Grid from "./Grid";

export type GameData = {};

// Object outside of component to make it mutatable
let newGame = new GameObject();
newGame.prepareGame();

const Game = () => {
  const [gameState, setGameState] = useState(newGame.board.boardState);

  const generateNewGame = () => {
    newGame = new GameObject();
    newGame.prepareGame();
    setGameState(newGame.board.boardState);
  };

  if (gameState) {
    return (
      <div>
        <h1 style={{ fontFamily: "sans-serif" }}>15 puzzle</h1>
        <button
          onClick={generateNewGame}
          style={{ padding: "10px", marginBottom: "20px" }}
        >
          New Game
        </button>
        <Grid
          mutableGame={newGame}
          gameState={gameState}
          setGameState={setGameState}
        />
      </div>
    );
  } else {
    return <button>CLICK TO BEGIN GAME</button>;
  }
};

export default Game;
