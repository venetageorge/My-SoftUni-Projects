function worldSwimmingRecord(input) {
  const recordInSeconds = Number(input[0]);
  const distanceInMeters = Number(input[1]);
  const timeInSecondsForOneMeter = Number(input[2]);

  const secondsAdded = Math.floor(distanceInMeters / 15) * 12.5;
  let totalTime = distanceInMeters * timeInSecondsForOneMeter + secondsAdded;

  if (totalTime >= recordInSeconds) {
    const difference = totalTime - recordInSeconds;
    console.log(`No, he failed! He was ${difference.toFixed(2)} seconds slower.`);
  } else {
    console.log(`Yes, he succeeded! The new world record is ${totalTime.toFixed(2)} seconds.`);
  }
}
worldSwimmingRecord(["10464", "1500", "20"]);
