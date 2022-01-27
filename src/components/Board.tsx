import React, { useEffect, useState } from "react";
import GameObject from "../classes/game";
import Grid from "./Grid";

export type BoardDate = {};

export const Board: React.FC = () => {
  const [boardState, setBoardState] = useState([
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
  ]);
  return <div></div>;
};
