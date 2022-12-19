/**
 * Practice: Making classes and objects
 *
 * - Find a type of object you have more than one of in your house (eg. clothing, writing tools, etc).
 * - Create a class describing this object type - its properties and methods.
 * - Create several objects using the class.
 * - Test the objecs by calling their properties and using their methods in the console.
 */

class Shirts {
    constructor(
        color,
        size,
        type,
        fits,

    ) {
        this.color = color;
        this.size = size;
        this.type = type;
        this,fits = fits;
    }
    toggleFits (newFits) {
        this.toggleFits = newFits;
    }
    newColor(newShirtColor) {
        this.newColor = newShirtColor;
    }
}
