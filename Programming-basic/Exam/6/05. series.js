function series(input) {
  let budget = Number(input[0]);
  let countSerials = Number(input[1]);
  let index = 2;
  let total = 0;
  let serialName = input[index];

  for (let i = 1; i <= countSerials; i++) {
    index++;
    priceForTheSerial = Number(input[index]);

    if (serialName === "Thrones") {
      priceForTheSerial -= 0.5 * priceForTheSerial;
      total += priceForTheSerial;
    } else if (serialName === "Lucifer") {
      priceForTheSerial -= 0.4 * priceForTheSerial;
      total += priceForTheSerial;
    } else if (serialName === "Protector") {
      priceForTheSerial -= 0.3 * priceForTheSerial;
      total += priceForTheSerial;
    } else if (serialName === "TotalDrama") {
      priceForTheSerial -= 0.2 * priceForTheSerial;
      total += priceForTheSerial;
    } else if (serialName === "Area") {
      priceForTheSerial -= 0.1 * priceForTheSerial;
      total += priceForTheSerial;
    } else {
      total += priceForTheSerial;
    }
    index++;
    serialName = input[index];
  }
  let diff = Math.abs(budget - total);
  if (budget >= total) {
    console.log(
      `You bought all the series and left with ${diff.toFixed(2)} lv.`
    );
  } else {
    console.log(`You need ${diff.toFixed(2)} lv. more to buy the series!`);
  }
}
series(["25", "6", "Teen Wolf", "8", "Protector", "5", "TotalDrama", "5", "Area", "4", "Thrones", "5", "Lucifer", "9"]);
series(["5", "4", "Legends", "5", "Gotham", "4", "Lucifer", "12", "Thrones", "4"]);
series(["14.67", "3", "Golden age", "2.47", "Rush hours series", "15", "Unknown", "1.45"]);