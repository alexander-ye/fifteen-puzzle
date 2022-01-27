import React, { useState } from "react";

const gridSquareStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  textAlign: "center",
  width: "75px",
  height: "75px",
  boxShadow: "1px 1px 5px purple",
  backgroundColor: "#98c2d0",
  color: "white",
  fontFamily: "sans-serif",
  fontSize: "18px",
};

const gridSquareHoverStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  textAlign: "center",
  width: "75px",
  height: "75px",
  boxShadow: "1px 1px 5px violet",
  border: "none",
  backgroundColor: "#cdeafb",
  color: "white",
  fontFamily: "sans-serif",
  fontSize: "18px",
};

const gridSquareMovableStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  textAlign: "center",
  width: "75px",
  height: "75px",
  border: "none",
  boxShadow: "1px 1px 5px purple",
  backgroundColor: "#b0ddf8",
  color: "white",
  fontFamily: "sans-serif",
  fontSize: "18px",
};

export type GridSquareData = {
  tile: any;
  mutableGame: any;
  setGameState: any;
};

const GridSquare = ({ tile, mutableGame, setGameState }: GridSquareData) => {
  const [intendToMove, setIntendToMove] = useState(false);

  const immediateMove = () => {
    // Function for moving tiles that are immediately adjacent to the empty tile
    setIntendToMove(false);
    mutableGame.board.immediateMove(tile);
    setGameState([...mutableGame.board.boardState]);
  };

  const complexMove = () => {
    // Function for moving tiles involving pushing more than one block
    setIntendToMove(false);
    mutableGame.board.complexMove(tile);
    setGameState([...mutableGame.board.boardState]);
  };

  const hoverHighlight = (tile: any, tf: boolean) => {
    // Function for highlighting tiles that would move upon hover
    // mutableGame.board.complexIntendToMove(tile, tf);
    // setGameState([...mutableGame.board.boardState]);
  };

  if (tile.number === 0) {
    return <div style={gridSquareStyle}></div>;
  } else if (tile.immediateMovable || tile.columnMovable || tile.rowMovable) {
    return (
      <button
        onClick={tile.immediateMovable ? immediateMove : complexMove}
        style={intendToMove ? gridSquareHoverStyle : gridSquareMovableStyle}
        onMouseEnter={() => setIntendToMove(true)}
        onMouseLeave={() => setIntendToMove(false)}
      >
        {tile.number}
      </button>
    );
  } else {
    return (
      <div style={gridSquareStyle}>
        <p>{tile.number}</p>
      </div>
    );
  }
};

export default GridSquare;
