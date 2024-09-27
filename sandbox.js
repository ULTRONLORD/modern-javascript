//break and continue

const scores = [50, 30, 45, 100, 20, 10, 200];

for (let i = 0; i < scores.length; i++) {
  console.log("your score: ", scores[i]);

  if (scores[i] === 100) {
    console.log("congrats this is the highest number");
    break;
  }
}
