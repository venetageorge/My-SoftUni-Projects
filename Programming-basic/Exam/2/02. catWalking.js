function catWalking(input) {
  let minutesWalkOnDay = Number(input[0]);
  let countWalkOnDay = Number(input[1]);
  let calories = Number(input[2]);

  let totalWalk = minutesWalkOnDay * countWalkOnDay;
  let totalCalories = 5 * totalWalk;
  let fiftyCalories = 0.5 * calories;

  if (totalCalories >= fiftyCalories) {
    console.log(
      `Yes, the walk for your cat is enough. Burned calories per day: ${totalCalories}.`
    );
  } else {
    console.log(
      `No, the walk for your cat is not enough. Burned calories per day: ${totalCalories}.`
    );
  }
}
catWalking(["15", "2", "500"]);
