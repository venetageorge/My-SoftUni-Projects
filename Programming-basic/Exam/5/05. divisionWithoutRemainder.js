function divisionWithoutRemainder(input) {
  let sumOfNumbers = Number(input[0]);
  let index = 1;
  let p1 = 0;
  let p2 = 0;
  let p3 = 0;

  for (let i = 1; i <= sumOfNumbers; i++) {
    let num = Number(input[index]);
    
    if (num % 2 === 0) {
        p1++;
    }
    if (num % 3 === 0) {
        p2++;
    }
    if (num % 4 === 0) {
      p3++;
    }
    index++;
  }

  let p1Procentage = (p1 / sumOfNumbers) * 100;
  let p2Procentage = (p2 / sumOfNumbers) * 100;
  let p3Procentage = (p3 / sumOfNumbers) * 100;
  console.log(`${p1Procentage.toFixed(2)}%`);
  console.log(`${p2Procentage.toFixed(2)}%`);
  console.log(`${p3Procentage.toFixed(2)}%`);
}
divisionWithoutRemainder([
  "10",
  "680",
  "2",
  "600",
  "200",
  "800",
  "799",
  "199",
  "46",
  "128",
  "65",
]);
