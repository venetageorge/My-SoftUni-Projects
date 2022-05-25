function repainting(input) {
  let nylonPerSqMeter = Number(input[0]);
  let paintPerLiter = Number(input[1]);
  let thinnerInLiter = Number(input[2]);
  let workHours = Number(input[3]);

  let nylonPrice = 1.5;
  let paintPrice = 14.5;
  let thinnerPrice = 5.0;

  let nylonSum = (nylonPerSqMeter + 2) * nylonPrice;
  let paintSum = (paintPerLiter + (10 / 100) * paintPerLiter) * paintPrice;
  let thinnerSum = thinnerInLiter * thinnerPrice;
  let totalSum = nylonSum + paintSum + thinnerSum + 0.4;

  let payForWork = totalSum * (30 / 100) * workHours;
  let totalPay = totalSum + payForWork;
  console.log(totalPay);
}
repainting(["5 ", "10 ", "10 ", "1 "]);
