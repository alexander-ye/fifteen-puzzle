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
}
