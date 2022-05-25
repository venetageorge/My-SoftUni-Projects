function movieDay(input) {
  const timeForPhoto = Number(input[0]);
  const sceneCount = Number(input[1]);
  const timeScene = Number(input[2]);

  let preparationTerrain = timeForPhoto * 0.15;
  let timeForPhoteTheScene = sceneCount * timeScene;
  let totalTime = preparationTerrain + timeForPhoteTheScene;

  let diff = Math.abs(timeForPhoto - totalTime);
  if (timeForPhoto < totalTime) {
    console.log(
      `Time is up! To complete the movie you need ${Math.round(diff)} minutes.`
    );
  } else {
    console.log(
      `You managed to finish the movie on time! You have ${Math.round(
        diff
      )} minutes left!`
    );
  }
}
movieDay(["60", "15", "3"]);
