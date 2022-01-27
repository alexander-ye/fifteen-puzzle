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

  immediateMove(tileToMove) {
    const emptyTile = this.boardState.find((tile) => tile.number === 0);
    const emptyPosition = emptyTile.getPosition();
    emptyTile.setPosition(tileToMove.position);
    tileToMove.setPosition(emptyPosition);

    // const emptyTile = this.boardState.find((tile) => tile.number === 0);
    // const oldPosition = tileToMove.position;

    // this.boardState = this.boardState.map((tile) => {
    //   if (tile.position === oldPosition) {
    //     console.log(tile);
    //     tile.setPosition(emptyTile.position);
    //     emptyTile.setPosition(oldPosition);
    //   }
    // });
    // this.setMovableTiles();
  }

  detectMovableTiles() {
    const boardTiles = [...this.boardState];
    const emptyTile = boardTiles.find((tile) => tile.empty);
    let immediateMovableTiles;
    let columnMovableTiles;
    let rowMovableTiles;

    switch (emptyTile.position) {
      case 0:
        immediateMovableTiles = [1, 4];
        columnMovableTiles = [4, 8, 12];
        rowMovableTiles = [1, 2, 3];
        break;
      case 1:
        immediateMovableTiles = [0, 2, 5];
        columnMovableTiles = [5, 9, 13];
        rowMovableTiles = [0, 2, 3];
        break;
      case 2:
        immediateMovableTiles = [1, 3, 6];
        columnMovableTiles = [6, 10, 14];
        rowMovableTiles = [0, 1, 3];
        break;
      case 3:
        immediateMovableTiles = [2, 7];
        columnMovableTiles = [7, 11, 15];
        rowMovableTiles = [0, 1, 2];
        break;
      case 4:
        immediateMovableTiles = [0, 5, 8];
        columnMovableTiles = [0, 8, 12];
        rowMovableTiles = [5, 6, 7];
        break;
      case 5:
        immediateMovableTiles = [1, 4, 6, 9];
        columnMovableTiles = [1, 9, 13];
        rowMovableTiles = [4, 6, 7];
        break;
      case 6:
        immediateMovableTiles = [2, 5, 7, 10];
        columnMovableTiles = [2, 10, 14];
        rowMovableTiles = [4, 5, 7];
        break;
      case 7:
        immediateMovableTiles = [3, 6, 11];
        columnMovableTiles = [3, 11, 15];
        rowMovableTiles = [4, 5, 6];
        break;
      case 8:
        immediateMovableTiles = [4, 9, 12];
        columnMovableTiles = [0, 4, 12];
        rowMovableTiles = [9, 10, 11];
        break;
      case 9:
        immediateMovableTiles = [5, 8, 10, 13];
        columnMovableTiles = [1, 5, 13];
        rowMovableTiles = [8, 10, 11];
        break;
      case 10:
        immediateMovableTiles = [6, 9, 11, 14];
        columnMovableTiles = [2, 6, 14];
        rowMovableTiles = [8, 9, 11];
        break;
      case 11:
        immediateMovableTiles = [7, 10, 15];
        columnMovableTiles = [3, 7, 15];
        rowMovableTiles = [8, 9, 10];
        break;
      case 12:
        immediateMovableTiles = [8, 13];
        columnMovableTiles = [0, 4, 8];
        rowMovableTiles = [13, 14, 15];
        break;
      case 13:
        immediateMovableTiles = [9, 12, 14];
        columnMovableTiles = [1, 5, 9];
        rowMovableTiles = [12, 14, 15];
        break;
      case 14:
        immediateMovableTiles = [10, 13, 15];
        columnMovableTiles = [2, 6, 10];
        rowMovableTiles = [12, 13, 15];
        break;
      case 15:
        immediateMovableTiles = [11, 14];
        columnMovableTiles = [3, 7, 11];
        rowMovableTiles = [12, 13, 14];
        break;
    }
    return {
      immediateMovableTiles: immediateMovableTiles,
      columnMovableTiles: columnMovableTiles,
      rowMovableTiles: rowMovableTiles,
    };
  }

  setMovableTiles() {
    const movableTiles = this.detectMovableTiles();

    this.boardState.map((tile) => {
      movableTiles.immediateMovableTiles.forEach((i) => {
        if (tile.position === i) {
          tile.setImmediateMovable(true);
        }
        movableTiles.columnMovableTiles.forEach((i) => {
          if (tile.position === i) {
            tile.setColumnMovable(true);
          }
        });
        movableTiles.rowMovableTiles.forEach((i) => {
          if (tile.position === i) {
            tile.setRowMovable(true);
          }
        });
      });
    });
  }

  clone() {
    let out = new BoardObject();
    out.boardState = this.boardState;
    return out;
  }
}
