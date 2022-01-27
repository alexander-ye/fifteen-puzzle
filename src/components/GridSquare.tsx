import React from "react";

const gridSquareStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  textAlign: "center",
  width: "75px",
  height: "75px",
  boxShadow: "1px 1px 5px gray",
  backgroundColor: "#9d8dcc",
  color: "white",
  fontFamily: "sans-serif",
};

const gridSquareImmediateStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  textAlign: "center",
  width: "75px",
  height: "75px",
  boxShadow: "1px 1px 5px gray",
  border: "none",
  backgroundColor: "#8c6ce8",
  color: "white",
  fontFamily: "sans-serif",
};

const gridSquareDistantStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  textAlign: "center",
  width: "75px",
  height: "75px",
  border: "none",
  boxShadow: "1px 1px 5px gray",
  backgroundColor: "#8c6ce8",
  color: "white",
  fontFamily: "sans-serif",
};

export type GridSquareData = {
  tile: any;
  mutableGame: any;
  setGameState: any;
};

const GridSquare = ({ tile, mutableGame, setGameState }: GridSquareData) => {
  const immediateMove = () => {
    // Function for moving tiles that are immediately adjacent to the empty tile
    mutableGame.board.immediateMove(tile);
    setGameState([...mutableGame.board.boardState]);
  };

  const complexMove = () => {
    // Function for moving tiles involving pushing more than one block
    mutableGame.board.complexMove(tile);
    setGameState([...mutableGame.board.boardState]);
  };

  if (tile.number === 0) {
    return <div style={gridSquareStyle}></div>;
  } else if (tile.immediateMovable || tile.columnMovable || tile.rowMovable) {
    return (
      <button
        onClick={tile.immediateMovable ? immediateMove : complexMove}
        style={
          tile.immediateMovable
            ? gridSquareImmediateStyle
            : gridSquareDistantStyle
        }
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
