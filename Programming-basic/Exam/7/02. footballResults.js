function footballResults(input) {
  const firstResult = input[0];
  const secondResult = input[1];
  const thirdResult = input[2];
  let winCounter = 0;
  let loseCounter = 0;
  let equal = 0;

  let firstFirst = firstResult.charAt(0);
  let firstSecond = firstResult.charAt(2);
  if (firstFirst > firstSecond) {
    winCounter++;
  } else if (firstFirst < firstSecond) {
    loseCounter++;
  } else {
    equal++;
  }

  let secondFirst = secondResult.charAt(0);
  let secondSecond = secondResult.charAt(2);
  if (secondFirst > secondSecond) {
    winCounter++;
  } else if (secondFirst < secondSecond) {
    loseCounter++;
  } else {
    equal++;
  }

  let thirdFirst = thirdResult.charAt(0);
  let thirdSecond = thirdResult.charAt(2);

  if (thirdFirst > thirdSecond) {
    winCounter++;
  } else if (thirdFirst < thirdSecond) {
    loseCounter++;
  } else {
    equal++;
  }

  console.log(`Team won ${winCounter} games.`);
  console.log(`Team lost ${loseCounter} games.`);
  console.log(`Drawn games: ${equal}`);
}
footballResults(["0:2", "0:1", "3:3"]);
