export default class TileObject {
  constructor(number, position) {
    this.number = number;
    this.position = position;
    this.empty = 0 ? true : false;
  }

  moveTo(i) {
    this.position = i;
  }

  setPosition(i) {
    this.position = i;
  }

  calculateSurroundingPositions() {
    console.log("Todo");
  }
}
