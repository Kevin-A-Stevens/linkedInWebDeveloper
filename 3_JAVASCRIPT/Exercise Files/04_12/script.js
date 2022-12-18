/* Closures = A function inside a function that relies on valiables outside of
that function to work. The browser is smart enough to know that these two functions are related
and keeps the variables a and b assigned until the function multiply executes */

/* function doSomeMath() {
	var a = 5;
	var b = 4;

	function multiply() {
		var result = a*b;
		return result;
	}

	return multiply;

}

var theResult = doSomeMath();

console.log("The result: ", theResult);
*/

function giveMeEms(pixels) {
	var baseValue = 16;

	function doTheMath() {
		return pixels/baseValue;
	}

	return doTheMath;
}

var smallSize = giveMeEms(12);
var mediumSize = giveMeEms(18);
var largeSize = giveMeEms(24);
var xlargeSize = giveMeEms(32);

console.log("Small size: ", smallSize() );
console.log("Medium size: ", mediumSize() );
console.log("Large size: ", largeSize() );
console.log("X-tra Large size: ", xlargeSize() );
