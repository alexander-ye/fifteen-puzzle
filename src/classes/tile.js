const positionDictionary = {
  0: [0, 0],
  1: [0, 1],
  2: [0, 2],
  3: [0, 3],
  4: [1, 0],
  5: [1, 1],
  6: [1, 2],
  7: [1, 3],
  8: [2, 0],
  9: [2, 1],
  10: [2, 2],
  11: [2, 3],
  12: [3, 0],
  13: [3, 1],
  14: [3, 2],
  15: [3, 3],
};

export default class TileObject {
  constructor(number, position) {
    this.number = number;
    this.position = position;
    this.coordinates = positionDictionary[this.position];
    this.immediateMovable = false;
    this.rowMovable = false;
    this.columnMovable = false;
    this.empty = number === 0 ? true : false;
    this.intendToMove = false;
  }

  getPosition() {
    return this.position;
  }

  getImmediateMovable() {
    return this.immediateMovable;
  }

  getRowMovable() {
    return this.rowMovable;
  }

  getColumnMovable() {
    return this.columnMovable;
  }

  getIntendToMove() {
    return this.intendToMove;
  }

  setPosition(i) {
    this.position = i;
    this.coordinates = positionDictionary[i];
  }

  setImmediateMovable(tf) {
    this.immediateMovable = tf;
  }

  setRowMovable(tf) {
    this.rowMovable = tf;
  }

  setColumnMovable(tf) {
    this.columnMovable = tf;
  }

  setIntendToMove(tf) {
    this.intendToMove(tf);
  }
}
