import React, { useEffect, useState } from "react";
import GameObject from "../classes/game";
import Grid from "./Grid";

const Game = () => {
  const newGame = new GameObject();
  const [gameState, setGameState] = useState(newGame.gameState);

  useEffect(() => {
    newGame.prepareGame();
    setGameState(newGame.gameState);
  }, []);

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

export default Game;
