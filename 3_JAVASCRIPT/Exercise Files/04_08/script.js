/* Constants cannot be changed later */
const MYCONSTANT = 5;
console.log(MYCONSTANT);

function logScope() {
  let localVar = 2;

  if (localVar) {
    let localVar = "I'm different!";
    console.log("Nested localVar: ", localVar);
  }

  console.log("logScope localVar: ", localVar);
}

logScope();

/* If you want to limit the variable to one code block, use let */
