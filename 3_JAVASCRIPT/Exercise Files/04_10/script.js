/* Creating Objects - Objects begin with a capital (Course)*/

function Course(title,instructor,level,published,views) {
  this.title = title;
  this.instructor = instructor;
  this.level = level;
  this.published = published;
  this.views = views;
  this.updateViews = function() {
    return ++this.views;
  }
}

var course = [
  new Course("JavaScript Essential Training", "Morten Rand-Hendrickson", 1, true, 0),
  new Course("Up and Running with ECMAScript 6", "Eve Porcello", 1, true, 123456),
]

console.log(course);
console.log(course[1].instructor);
console.log(course[1].updateViews());
