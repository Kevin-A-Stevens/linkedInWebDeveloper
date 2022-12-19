/**
 * Create a Backpack object.
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

console.log("The backpack object: ", backpack);
// Access a value in an object with dot notation
// This is the preferred way of accessing object properties
console.log("The pocketNum value: ", backpack.pocketNum);
console.log("StrapLength left: ", backpack.strapLength.left);

// Access a value in an object with bracket notation

console.log("The pocketNum value: ", backpack["pocketNum"]);
// Bracket notation allows more advanced things. This can't be done in dot notation
var query = "pocketNum";
console.log("The pocketNum value: ", backpack[query]);


