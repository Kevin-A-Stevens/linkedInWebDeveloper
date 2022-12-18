/* Adding New DOM Elements
1. Create the Element
2. Create the text node that goes inside the Element
3. Add the text node to the Element
4. Add the element to the DOM tree
The three new elements we need for this are:
A. .createElement()
B. createTextNode()
C. appendChild() */

const FEATURED = document.querySelector(".featured-image");
const THEIMAGE = FEATURED.querySelector("img");

var altText = THEIMAGE.getAttribute("alt");

var captionElement = document.createElement("figcaption");

captionElement.append(altText);
FEATURED.append(captionElement);

THEIMAGE.setAttribute("alt", "");
