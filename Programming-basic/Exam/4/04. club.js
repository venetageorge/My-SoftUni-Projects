function club(input) {
  let index = 0;
  const moneyExpected = Number(input[index++]);
  let totalPrice = 0;

  for (let i = 0; i < input.length / 2; i++) {
    let coctailName = input[index++];
    let sumCoctails = Number(input[index++]);
    let coctailPrice = coctailName.length;

    if (coctailName === "Party!") {
      let moneyNeeded = moneyExpected - totalPrice;
      console.log(`We need ${moneyNeeded.toFixed(2)} leva more.`);
      console.log(`Club income - ${totalPrice.toFixed(2)} leva.`);
      break;
    }
    let price = sumCoctails * coctailPrice;
    if (price % 2 !== 0) {
      price -= 0.25 * price;
    }
    totalPrice += price;

    if (moneyExpected <= totalPrice) {
      console.log(`Target acquired.`);
      console.log(`Club income - ${totalPrice.toFixed(2)} leva.`);
      break;
    }
  }
}
club(["100", "Sidecar", "7", "Mojito", "5", "White Russian", "10"]);