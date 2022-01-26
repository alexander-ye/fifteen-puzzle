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

const gridSquareColoredStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  textAlign: "center",
  width: "75px",
  height: "75px",
  boxShadow: "1px 1px 5px gray",
  backgroundColor: "pink",
};

const GridSquare = ({ tile }) => {
  if (tile.number === 0) {
    return <button style={gridSquareStyle}></button>;
  } else {
    return (
      <div
        style={tile.immediateMovable ? gridSquareColoredStyle : gridSquareStyle}
      >
        <p>{tile.number}</p>
      </div>
    );
  }
};

export default GridSquare;
