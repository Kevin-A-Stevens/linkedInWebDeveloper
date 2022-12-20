/**
 * Working with array methods
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#Instance_methods
 */

let backpackContents = ["piggy", "headlamp", "pen"];

console.log(backpackContents);

// join method. output all items inside an array as a string. 

console.log(backpackContents.join(", "));

// push method. add one or more new items to the end of an array

backpackContents.push("pencil", 5)
console.log(backpackContents);

// unshift method. add one or more new items to the front of an array

backpackContents.unshift("pencil", 5)
console.log(backpackContents);

// shift method. remove one item from the front of an array

backpackContents.shift()
console.log(backpackContents);

// pop method. add one or more new items to the end of an array

backpackContents.pop()
console.log(backpackContents);

// forEach method. do something to each item in an array
backpackContents.forEach(function (item) {
  item = `<li>${item}</li>`;
  console.log(item);
});

// find method. do something an item in an array
let longItems = backpackContents.find(function (item) {
  if (item.length >= 5) {
    return item;
  }
});
console.log("longItems:", longItems);
