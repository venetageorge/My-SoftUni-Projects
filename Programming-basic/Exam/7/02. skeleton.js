function skeleton(input) {
  const controlInMinutes = Number(input[0]);
  const secondsControl = Number(input[1]);
  const lengthInMeters = Number(input[2]);
  const secondsFor100Meter = Number(input[3]);
  let delay = 120;

  let controlInSeconds = controlInMinutes * 60 + secondsControl;
  let timeMinus = (lengthInMeters / delay) * 2.5;
  let marinTime = (lengthInMeters / 100) * secondsFor100Meter - timeMinus;

  if (controlInSeconds >= marinTime) {
    console.log(
      `Marin Bangiev won an Olympic quota!\nHis time is ${marinTime.toFixed(
        3
      )}.`
    );
  } else {
    let diff = marinTime - controlInSeconds;
    console.log(`No, Marin failed! He was ${diff.toFixed(
        3
      )} second slower.`);
  }
}
skeleton(["1", "20", "1546", "12"]);
