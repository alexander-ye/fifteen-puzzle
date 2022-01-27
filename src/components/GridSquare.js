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
    console.log(mutableGame.board.boardState);
    mutableGame.board.immediateMove(tile);
    setGameState([...mutableGame.board.boardState]);
  };

  if (tile.number === 0) {
    return <div style={gridSquareStyle}></div>;
  } else if (tile.immediateMovable || tile.columnMovable || tile.rowMovable) {
    return (
      <button
        onClick={
          tile.immediateMovable ? immediateMove : () => console.log("Todo")
        }
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
