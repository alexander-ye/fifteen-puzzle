export default class TileObject {
  constructor(number, position) {
    this.number = number;
    this.position = position;
    this.immediateMovable = false;
    this.rowMovable = false;
    this.columnMovable = false;
    this.empty = number === 0 ? true : false;
  }

  moveTo(i) {
    this.position = i;
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

  setPosition(i) {
    this.position = i;
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

  calculateSurroundingPositions() {
    console.log("Todo");
  }

  clone() {
    const out = new TileObject(this.number, this.position);
    out.immediateMovable = this.immediateMovable;
    out.rowMovable = this.rowMovable;
    out.columnMovable = this.columnMovable;
    out.empty = this.empty;
    return out;
  }
}
