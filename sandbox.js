//Logical Operators - OR || and AND &&

const password = "p@ss";

if (password.length >= 12 && password.includes("@")) {
  console.log("That is a very strong password well done");
} else if (
  password.length >= 8 ||
  (password.includes("@") && password.length <= 5)
) {
  console.log("the password is not long enough but strong");
} else {
  console.log("password is not long enough");
}

//29:06 time for tut  video
