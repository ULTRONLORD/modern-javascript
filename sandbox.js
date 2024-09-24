//Logical Operators - OR || and AND &&

const password = "p@ssword12345";

if (password.length >= 12 && password.includes("@")) {
  console.log("That is a very strong password well done");
} else if (password.length >= 8) {
  console.log("the password is long enough but not strong enough");
} else {
  console.log("password is not long enough");
}

//29:06 time for tut  video
