/**
 * Create a Backpack object.
 * A function inside an object is called a Method
 */

const backpack = {
  name: "Everyday Backpack",
  volume: 30,
  color: "grey",
  pocketNum: 15,
  strapLength: {
    left: 26,
    right: 26,
  },
  lidOpen: false,
  toggleLid: function (lidStatus) {
    this.lidOpen = lidStatus;
  },
  newStrapLength: function (lengthLeft, lengthRight) {
    this.strapLength.left = lengthLeft;
    this.strapLength.right = lengthRight;
  },
};

console.log("The backpack object:", backpack);
console.log("The pocketNum value:", backpack.pocketNum);

// How Methods work
// We define them as functions inside an object
// We call them using dot notation
// We pass in the values to the Method
console.log("Left before: ", backpack.strapLength.left);
backpack.newStrapLength(10,15);
console.log("Left after: ", backpack.strapLength.left);

