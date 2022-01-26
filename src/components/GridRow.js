import React from "react";
import GridSquare from "./GridSquare";

const gridRowStyle = {
  display: "flex",
  flexDirection: "row",
};

const GridRow = ({ gridArrayRow }) => {
  return (
    <div style={gridRowStyle}>
      {gridArrayRow.map((tile) => {
        return <GridSquare tile={tile} />;
      })}
    </div>
  );
};

export default GridRow;
