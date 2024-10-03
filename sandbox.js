//Functions and Methods

//function declaratiion
// function greet() {
//   console.log("Hey there I'm quite hungry");
// }

//Function Expression
// const speak = function (name = "Elvis", time = "Afternoon") {
//   console.log(`Good ${time} ${name}`);
// };

// speak("Prof Elvis", "Evening");

const calcArea = function (radius) {
  let area = 3.14 * radius ** 2;
  return area;
};

const area = calcArea(5);
console.log(area);
