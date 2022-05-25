function mountainRun(input) {
  let recordInSeconds = Number(input[0]);
  let distanceInMeter = Number(input[1]);
  let timeInSecondsForOneMeter = Number(input[2]);

  let shouldClimp = distanceInMeter * timeInSecondsForOneMeter;
  let late = Math.floor(distanceInMeter / 50) * 30;
  let time = shouldClimp + late;
  let diff = Math.abs(recordInSeconds - time);

  if (time < recordInSeconds) {
    console.log(`Yes! The new record is ${time.toFixed(2)} seconds.`);
  } else {
    console.log(`No! He was ${diff.toFixed(2)} seconds slower.`);
  }
}
mountainRun(["10164", "1400", "25"]);