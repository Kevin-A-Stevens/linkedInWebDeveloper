var i =1;
var reps = 0;

while ( i<567 ) {
  ++reps;
  console.log(reps + " reps gives us " + i);
  i*=2.1;
}


if ( i <=567 ) {
  do {
    ++reps;
    console.log(reps + " reps gives us " + i);
    i*=2.1;
  } while ( i<567 );
} else {
  console.log("i is bigger than 567.");
}

for ( i=0; i<=10; i++ ) {
  console.log("i is equal to: " + i );
}
