import React from "react";

const gridSquareStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  textAlign: "center",
  width: "75px",
  height: "75px",
  boxShadow: "1px 1px 5px gray",
};

const gridSquareImmediateStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  textAlign: "center",
  width: "75px",
  height: "75px",
  boxShadow: "1px 1px 5px gray",
  backgroundColor: "green",
};

const gridSquareDistantStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  textAlign: "center",
  width: "75px",
  height: "75px",
  boxShadow: "1px 1px 5px gray",
  backgroundColor: "pink",
};

const GridSquare = ({ tile, mutableGame, setGameState }) => {
  const immediateMove = () => {
    // Function for moving tiles that are immediately adjacent to the empty tile
    mutableGame.board.immediateMove(tile);
    setGameState([...mutableGame.board.boardState]);
  };

  const complexMove = () => {
    // Function for moving tiles involving pushing more than one block
    mutableGame.board.complexMove(tile);
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
