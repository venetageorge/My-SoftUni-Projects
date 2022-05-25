function easterEggs(input) {
  const countColoredEggs = Number(input[0]);
  let index = 0;
  let colour = input[index];
  let red = 0;
  let orange = 0;
  let blue = 0;
  let green = 0;
  let maxEggs = Number.MIN_SAFE_INTEGER;
  let newColour = "";

  for (let i = 0; i <= countColoredEggs; i++) {
    if (colour === "red") {
      red++;
      if (maxEggs < red) {
        maxEggs = red;
        if ((maxEggs = red)) {
          newColour = colour;
        }
      }
    } else if (colour === "orange") {
      orange++;
      if (maxEggs < orange) {
        maxEggs = orange;
        if ((maxEggs = orange)) {
          newColour = colour;
        }
      }
    } else if (colour === "blue") {
      blue++;
      if (maxEggs < blue) {
        maxEggs = blue;
        if ((maxEggs = blue)) {
          newColour = colour;
        }
      }
    } else if (colour === "green") {
      green++;
      if (maxEggs < green) {
        maxEggs = green;
        if ((maxEggs = green)) {
          newColour = colour;
        }
      }
    }

    index++;
    colour = input[index];
  }
  console.log(`Red eggs: ${red}`);
  console.log(`Orange eggs: ${orange}`);
  console.log(`Blue eggs: ${blue}`);
  console.log(`Green eggs: ${green}`);
  console.log(`Max eggs: ${maxEggs} -> ${newColour}`);
}
easterEggs(["7", "orange", "blue", "green", "green", "blue", "red", "green"]);
