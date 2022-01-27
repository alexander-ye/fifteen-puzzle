import BoardObject from "./board";

export default class GameObject {
  constructor() {
    this.board = new BoardObject();
  }

  prepareGame() {
    this.board.scrambleTiles();
    this.board.setMovableTiles();
  }

  refreshMovableTiles() {
    this.board.setMovableTiles();
  }
}
