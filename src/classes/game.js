import BoardObject from "./board";

export default class GameObject {
  constructor() {
    this.board = new BoardObject();
    this.gameState = {
      board: this.board,
    };
  }

  prepareGame() {
    this.board.scrambleTiles();
    this.board.setMovableTiles();
    this.gameState = {
      board: this.board,
    };
  }

  refreshMovableTiles() {
    this.board.setMovableTiles();
    this.gameState = {
      board: this.board,
    };
  }
}
