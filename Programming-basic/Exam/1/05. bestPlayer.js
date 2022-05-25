function bestPlayer(input) {
  let index = 0;
  let name = input[index];
  let player = "";
  let star = "";
  let score = 0;
  let max = Number.MIN_SAFE_INTEGER;
  let hatTrick = 0;

  while (name !== "END") {
    player = input[index];
    index++;
    score = Number(input[index]);

    if (score > max) {
      max = score;
      star = player;
      if (score >= 3) {
        hatTrick = score;
      }
    }

    if (hatTrick >= 10) {
      break;
    }
    index++;
    name = input[index];
  }
  console.log(`${star} is the best player!`);
  if (hatTrick >= 3) {
    console.log(`He has scored ${hatTrick} goals and made a hat-trick !!!`);
  } else {
    console.log(`He has scored ${score} goals.`);
  }
}
bestPlayer(["Neymar", "2", "Ronaldo", "1", "Messi", "3", "END"]);
