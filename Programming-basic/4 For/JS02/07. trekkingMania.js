function trekkingMania(input) {
  let countOfGroups = Number(input[0]);
  let musalaGroup = 0;
  let monblanGroup = 0;
  let kilimanjaroGroup = 0;
  let k2Group = 0;
  let everestGroup = 0;
  let total = 0;

  for (let i = 1; i <= countOfGroups; i++) {
    let num = Number(input[i]);
    total += num;

    if (num <= 5) {
      musalaGroup += Number(input[i]);
    } else if (num >= 6 && num <= 12) {
      monblanGroup += Number(input[i]);
    } else if (num >= 13 && num <= 25) {
      kilimanjaroGroup += Number(input[i]);
    } else if (num >= 26 && num <= 40) {
      k2Group += Number(input[i]);
    } else {
      everestGroup += Number(input[i]);
    }
  }
  let musalaTotal = (musalaGroup / total) * 100;
  let monblanTotal = (monblanGroup / total) * 100;
  let kilimanjaroTotal = (kilimanjaroGroup / total) * 100;
  let k2Total = (k2Group / total) * 100;
  let everestTotal = (everestGroup / total) * 100;

  console.log(`${musalaTotal.toFixed(2)}%`);
  console.log(`${monblanTotal.toFixed(2)}%`);
  console.log(`${kilimanjaroTotal.toFixed(2)}%`);
  console.log(`${k2Total.toFixed(2)}%`);
  console.log(`${everestTotal.toFixed(2)}%`);
}
trekkingMania(["5", "25", "41", "31", "250", "6"]);