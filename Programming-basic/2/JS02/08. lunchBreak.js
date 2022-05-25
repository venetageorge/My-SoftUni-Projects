function lunchBreak(input) {
  const nameOfTheSerial = input[0];
  const durationOfTheSerial = Number(input[1]);
  const breakTime = Number(input[2]);

  let lunchTime = (1 / 8) * breakTime;
  let restTime = 0.25 * breakTime;
  let rest = breakTime - lunchTime - restTime;

  if (rest >= durationOfTheSerial) {
    difference = Math.ceil(rest - durationOfTheSerial);
    console.log(`You have enough time to watch ${nameOfTheSerial} and left with ${difference} minutes free time.`);
  } else {
    difference = Math.ceil(durationOfTheSerial - rest);
    console.log(`You don't have enough time to watch ${nameOfTheSerial}, you need ${difference} more minutes.`);
  }
}
lunchBreak(["Teen Wolf", "48", "60"]);
