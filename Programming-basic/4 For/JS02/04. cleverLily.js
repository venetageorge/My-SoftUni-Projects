function cleverLily(input) {
  let age = Number(input[0]);
  let washingMaschinePrice = Number(input[1]);
  let toyPrice = Number(input[2]);
  let budget = 0;
  let money = 10;
  let toyCount = 0;

  for (let i = 1; i <= age; i++) {
    if (i % 2 === 0) {
      budget += money;
      money += 10;
      budget -= 1;
    } else {
      toyCount++;
    }
  }
  budget += toyCount * toyPrice;
  let diff = Math.abs(budget - washingMaschinePrice);
  if (budget >= washingMaschinePrice) {
    console.log(`Yes! ${diff.toFixed(2)}`);
  } else {
    console.log(`No! ${diff.toFixed(2)}`);
  }
}
cleverLily(["21", "1570.98", "3"]);
