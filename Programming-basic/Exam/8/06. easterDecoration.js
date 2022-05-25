function easterDecoration(input) {
  const sumCustomer = Number(input[0]);
  let index = 1;
  let basketPrice = 1.5;
  let wreathPrice = 3.8;
  let bunnyPrice = 7;
  let price = 0;
  let counter = 0;
  let total = 0;

  for (let i = 1; i <= sumCustomer; i++) {
    let command = input[index];

    while (command !== "Finish") {
      command = input[index];

      if (command === "Finish") {
        break;
      }

      if (command === "basket") {
        price += basketPrice;
        counter++;
      } else if (command === "wreath") {
        price += wreathPrice;
        counter++;
      } else {
        price += bunnyPrice;
        counter++;
      }
      index++;
    }

    if (counter % 2 === 0) {
      price -= 0.2 * price;
    }
    total += price;
    console.log(`You purchased ${counter} items for ${price.toFixed(2)} leva.`);

    index++;
    price = 0;
    counter = 0;
  }

  let avgTotal = total / sumCustomer;
  console.log(`Average bill per client is: ${avgTotal.toFixed(2)} leva.`);
}
easterDecoration([
  "1",
  "basket",
  "wreath",
  "chocolate bunny",
  "wreath",
  "basket",
  "chocolate bunny",
  "Finish",
]);
