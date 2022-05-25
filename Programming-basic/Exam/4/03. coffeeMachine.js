function coffeeMachine(input) {
  let drink = input[0];
  let sugar = input[1];
  let countDrinks = Number(input[2]);
  let price = 0;

  switch (drink) {
    case "Espresso":
      if (sugar === "Without" && countDrinks > 5) {
        price = countDrinks * 0.9;
        price -= 0.35 * price;
        price -= 0.25 * price;
      } else if (sugar === "Without") {
        price = countDrinks * 0.9;
        price -= 0.35 * price;
      } else if (sugar === "Normal" && countDrinks > 5) {
        price = countDrinks * 1.0;
        price -= 0.25 * price;
      } else if (sugar === "Normal") {
        price = countDrinks * 1.0;
      } else if (sugar === "Extra" && countDrinks > 5) {
        price = countDrinks * 1.2;
        price -= 0.25 * price;
      } else if (sugar === "Extra") {
        price = countDrinks * 1.2;
      }
      if (price > 15.0) {
        price -= 0.2 * price;
      }
      console.log(`You bought ${countDrinks} cups of ${drink} for ${price.toFixed(2)} lv.`);
      break;
      
      case "Cappuccino":
      if (sugar === "Without") {
        price = countDrinks * 1.0;
        price -= 0.35 * price;
      } else if (sugar === "Normal") {
        price = countDrinks * 1.2;
      } else if (sugar === "Extra") {
        price = countDrinks * 1.6;
      }
      if (price > 15.0) {
        price -= 0.2 * price;
      }
      console.log(`You bought ${countDrinks} cups of ${drink} for ${price.toFixed(2)} lv.`);
      break;

    case "Tea":
      if (sugar === "Without") {
        price = countDrinks * 0.5;
        price -= 0.35 * price;
      } else if (sugar === "Normal") {
        price = countDrinks * 0.6;
      } else if (sugar === "Extra") {
        price = countDrinks * 0.7;
      }
      if (price > 15.0) {
        price -= 0.2 * price;
      }
      console.log(`You bought ${countDrinks} cups of ${drink} for ${price.toFixed(2)} lv.`);
      break;
  }
}
coffeeMachine(["Espresso", "Without", "10"]);
