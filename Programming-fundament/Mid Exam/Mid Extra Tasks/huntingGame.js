function huntingGame(input) {
  let days = Number(input.shift());
  let playerCount = Number(input.shift());
  let energy = Number(input.shift());
 
  let water = Number(input.shift()) * days * playerCount;
  let food = Number(input.shift()) * days * playerCount;
 
  for (let i = 1; i <= input.length; i++) {
    energy -= Number(input[i - 1]);
 
    if (energy <= 0) {
      return console.log(
        `You will run out of energy. You will be left with ${food.toFixed(2)} food and ${water.toFixed(2)} water.`
      );
    }
 
    if (i % 2 === 0) {
      water *= 0.7;
      energy *= 1.05;
    }
    if (i % 3 === 0) {
      food -= food / playerCount;
      energy *= 1.1;
    }
 
  }
 
  console.log(
    `You are ready for the quest. You will be left with - ${energy.toFixed(2)} energy!`
  );
}