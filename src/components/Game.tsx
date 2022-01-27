import React, { useEffect, useState } from "react";
import GameObject from "../classes/game";
import Grid from "./Grid";

export type GameData = {};

// Object outside of component to make it mutatable
const newGame = new GameObject();
newGame.prepareGame();

export const Game: React.FC = () => {
  const [gameState, setGameState] = useState(newGame.board.boardState);

  useEffect(() => {
    console.log("MOVE!");
  }, [gameState]);

  console.log(gameState);
  if (gameState) {
    return (
      <div>
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
