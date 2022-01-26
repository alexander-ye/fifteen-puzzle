import BoardObject from "./board";

export default class GameObject {
  constructor() {
    this.board = new BoardObject();
    this.board.scrambleTiles();
    this.gameState = {
      board: this.board,
    };
  }

  scrambleBoard() {
    this.board.scrambleTiles();
  }
}
