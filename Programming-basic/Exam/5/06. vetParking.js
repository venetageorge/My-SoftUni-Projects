function vetParking(input) {
  let index = 0;
  let daysCount = Number(input[index]);
  index++;
  let hours = Number(input[index]);
  let counter = 0;
  let total = 0;

  for (let i = 1; i <= daysCount; i++) {
    counter++;
    let priceHour = 0;

    for (let j = 1; j <= hours; j++) {
      if (i % 2 !== 0 && j % 2 === 0) {
        let tax = 1.25;
        priceHour += tax;
      } else if (i % 2 === 0 && j % 2 !== 0) {
        let tax = 2.5;
        priceHour += tax;
      } else {
        let tax = 1.0;
        priceHour += tax;
      }

      index++;
    }
    total += priceHour;
    console.log(`Day: ${counter} - ${priceHour.toFixed(2)} leva`);
    index++;
  }
  console.log(`Total: ${total.toFixed(2)} leva`);
}
vetParking(["5", "2"]);
