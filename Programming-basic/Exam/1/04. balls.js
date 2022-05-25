function balls(input) {
  let nCount = Number(input[0]);
  let sum = 0;
  let count = 0;
  let dividesFromBlackBalls = 0;
  let countWhite = 0;
  let countYellow = 0;
  let countOrange = 0;
  let countRed = 0;
  let colour = "";

  for (let i = 1; i <= nCount; i++) {
    colour = input[i];

    if (colour == "red") {
      countRed++;
      sum += 5;
    } else if (colour == "orange") {
      countOrange++;
      sum += 10;
    } else if (colour == "yellow") {
      countYellow++;
      sum += 15;
    } else if (colour == "white") {
      countWhite++;
      sum += 20;
    } else if (colour == "black") {
      dividesFromBlackBalls++;
      sum = Math.floor(sum / 2);
    } else {
      count++;
    }
  }
  console.log(`Total points: ${sum}`);
  console.log(`Red balls: ${countRed}`);
  console.log(`Orange balls: ${countOrange}`);
  console.log(`Yellow balls: ${countYellow}`);
  console.log(`White balls: ${countWhite}`);
  console.log(`Other colors picked: ${count}`);
  console.log(`Divides from black balls: ${dividesFromBlackBalls}`);
}
balls(["5", "red", "red", "ddd", "ddd", "ddd"]);