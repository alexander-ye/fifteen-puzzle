import TileObject from "./tile";

export default class BoardObject {
  constructor() {
    this.boardState = [
      0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
    ].flatMap((i) => new TileObject(i, i));
  }

  // Fisher-Yates shuffle algorithm
  scrambleTiles() {
    const boardTiles = [...this.boardState];
    let currentIndex = boardTiles.length,
      placeholderTile,
      randomIndex;

    // While elements exist to shuffle
    while (currentIndex != 0) {
      randomIndex = Math.floor(Math.random() * currentIndex--);

      // Change board tile indeces
      boardTiles[currentIndex].setPosition(randomIndex);
      boardTiles[randomIndex].setPosition(currentIndex);

      // Swap board tile positions in boardState list
      placeholderTile = boardTiles[currentIndex];
      boardTiles[currentIndex] = boardTiles[randomIndex];
      boardTiles[randomIndex] = placeholderTile;
    }

    this.boardState = boardTiles;
  }

  setTileImmediateMovable(tile, indices) {
    // Use every, which behaves like forEach but stops iterating when a falsy value gets returned
    indices.every((i) => {
      if (this.boardState[i].empty) {
        tile.setImmediateMovable(true);
        return 0;
      } else {
        tile.setImmediateMovable(false);
      }
    });
  }

  setTileColumnMovable(tile, indices) {
    indices.every((i) => {
      if (this.boardState[i].empty) {
        tile.setColumnMovable(true);
        return 0;
      } else {
        tile.setColumnMovable(false);
      }
    });
  }

  setTileRowMovable(tile, indices) {
    indices.every((i) => {
      if (this.boardState[i].empty) {
        tile.setRowMovable(true);
        return 0;
      } else {
        tile.setRowMovable(false);
      }
    });
  }

  // Determine movability
  setMovableTiles() {
    this.boardState.forEach((tile) => {
      switch (tile.position) {
        case 0:
          this.setTileImmediateMovable(tile, [1, 4]);
          this.setTileColumnMovable(tile, [4, 8, 12]);
          this.setTileRowMovable(tile, [1, 2, 3]);
          break;
        case 1:
          this.setTileImmediateMovable(tile, [0, 2, 5]);
          this.setTileColumnMovable(tile, [5, 9, 13]);
          this.setTileRowMovable(tile, [0, 2, 3]);
          break;
        case 2:
          this.setTileImmediateMovable(tile, [1, 3, 6]);
          this.setTileColumnMovable(tile, [6, 10, 14]);
          this.setTileRowMovable(tile, [0, 1, 3]);
          break;
        case 3:
          this.setTileImmediateMovable(tile, [2, 7]);
          this.setTileColumnMovable(tile, [7, 11, 15]);
          this.setTileRowMovable(tile, [0, 1, 2]);
          break;
        case 4:
          this.setTileImmediateMovable(tile, [0, 5, 8]);
          this.setTileColumnMovable(tile, [0, 8, 12]);
          this.setTileRowMovable(tile, [5, 6, 7]);
          break;
        case 5:
          this.setTileImmediateMovable(tile, [1, 4, 6, 9]);
          this.setTileColumnMovable(tile, [1, 9, 13]);
          this.setTileRowMovable(tile, [4, 6, 7]);
          break;
        case 6:
          this.setTileImmediateMovable(tile, [2, 5, 7, 10]);
          this.setTileColumnMovable(tile, [2, 10, 14]);
          this.setTileRowMovable(tile, [4, 5, 7]);
          break;
        case 7:
          this.setTileImmediateMovable(tile, [3, 6, 11]);
          this.setTileColumnMovable(tile, [3, 11, 15]);
          this.setTileRowMovable(tile, [4, 5, 6]);
          break;
        case 8:
          this.setTileImmediateMovable(tile, [4, 9, 12]);
          this.setTileColumnMovable(tile, [0, 4, 12]);
          this.setTileRowMovable(tile, [9, 10, 11]);
          break;
        case 9:
          this.setTileImmediateMovable(tile, [5, 8, 10, 13]);
          this.setTileColumnMovable(tile, [1, 5, 13]);
          this.setTileRowMovable(tile, [8, 10, 11]);
          break;
        case 10:
          this.setTileImmediateMovable(tile, [6, 9, 11, 14]);
          this.setTileColumnMovable(tile, [2, 6, 14]);
          this.setTileRowMovable(tile, [8, 9, 11]);
          break;
        case 11:
          this.setTileImmediateMovable(tile, [7, 10, 15]);
          this.setTileColumnMovable(tile, [3, 7, 15]);
          this.setTileRowMovable(tile, [8, 9, 10]);
          break;
        case 12:
          this.setTileImmediateMovable(tile, [8, 13]);
          this.setTileColumnMovable(tile, [0, 4, 8]);
          this.setTileRowMovable(tile, [13, 14, 15]);
          break;
        case 13:
          this.setTileImmediateMovable(tile, [9, 12, 14]);
          this.setTileColumnMovable(tile, [1, 5, 9]);
          this.setTileRowMovable(tile, [12, 14, 15]);
          break;
        case 14:
          this.setTileImmediateMovable(tile, [10, 13, 15]);
          this.setTileColumnMovable(tile, [2, 6, 10]);
          this.setTileRowMovable(tile, [12, 13, 15]);
          break;
        case 15:
          this.setTileImmediateMovable(tile, [11, 14]);
          this.setTileColumnMovable(tile, [3, 7, 11]);
          this.setTileRowMovable(tile, [12, 13, 14]);
          break;
      }
    });
  }
}
