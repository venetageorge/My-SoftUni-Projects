function alominumJoinery(input) {
  let countJoinery = Number(input[0]);
  let typeJoinery = input[1];
  let deliveryType = input[2];
  let price = 0;

  switch (deliveryType) {
    case "Without delivery":
      if (typeJoinery === "90X130") {
        price = 110;
        price *= countJoinery;
        if (countJoinery >= 30 && countJoinery <= 60) {
          price -= 0.05 * price;
          console.log(`${price.toFixed(2)} BGN`);
        } else if (countJoinery > 60 && countJoinery <= 99) {
          price -= 0.08 * price;
          console.log(`${price.toFixed(2)} BGN`);
        } else if (countJoinery > 99) {
          price -= 0.08 * price;
          price -= 0.04 * price;
          console.log(`${price.toFixed(2)} BGN`);
        } else if (countJoinery < 10) {
          console.log(`Invalid order`);
        } else {
          console.log(`${price.toFixed(2)} BGN`);
        }
    } else if (typeJoinery === "100X150") {
        price = 140;
        price *= countJoinery;
        if (countJoinery >= 40 && countJoinery <= 80) {
          price -= 0.06 * price;
          console.log(`${price.toFixed(2)} BGN`);
        } else if (countJoinery > 80 && countJoinery <= 99) {
          price -= 0.1 * price;
          console.log(`${price.toFixed(2)} BGN`);
        } else if (countJoinery > 99) {
          price -= 0.1 * price;
          price -= 0.04 * price;
          console.log(`${price.toFixed(2)} BGN`);
        } else if (countJoinery < 10) {
          console.log(`Invalid order`);
        } else {
          console.log(`${price.toFixed(2)} BGN`);
        }
      } else if (typeJoinery === "130X180") {
        price = 190;
        price *= countJoinery;
        if (countJoinery >= 20 && countJoinery <= 50) {
          price -= 0.07 * price;
          console.log(`${price.toFixed(2)} BGN`);
        } else if (countJoinery > 50 && countJoinery <= 99) {
          price -= 0.12 * price;
          console.log(`${price.toFixed(2)} BGN`);
        } else if (countJoinery > 99) {
          price -= 0.12 * price;
          price -= 0.04 * price;
          console.log(`${price.toFixed(2)} BGN`);
        } else if (countJoinery < 10) {
          console.log(`Invalid order`);
        } else {
          console.log(`${price.toFixed(2)} BGN`);
        }
      } else if (typeJoinery === "200X300") {
        price = 250;
        price *= countJoinery;
        if (countJoinery >= 25 && countJoinery <= 50) {
          price -= 0.09 * price;
          console.log(`${price.toFixed(2)} BGN`);
        } else if (countJoinery > 50 && countJoinery <= 99) {
          price -= 0.14 * price;
          console.log(`${price.toFixed(2)} BGN`);
        } else if (countJoinery > 99) {
          price -= 0.14 * price;
          price -= 0.04 * price;
          console.log(`${price.toFixed(2)} BGN`);
        } else if (countJoinery < 10) {
          console.log(`Invalid order`);
        } else {
          console.log(`${price.toFixed(2)} BGN`);
        }
      }
      break;

    case "With delivery":
      if (typeJoinery === "90X130") {
        price = 110;
        price *= countJoinery;
        if (countJoinery >= 30 && countJoinery <= 60) {
          price -= 0.05 * price;
          price += 60;
          console.log(`${price.toFixed(2)} BGN`);
        } else if (countJoinery > 60 && countJoinery <= 99) {
          price -= 0.08 * price;
          price += 60;
          console.log(`${price.toFixed(2)} BGN`);
        } else if (countJoinery > 99) {
          price -= 0.08 * price;
          price += 60;
          price -= 0.04 * price;
          console.log(`${price.toFixed(2)} BGN`);
        } else if (countJoinery < 10) {
          console.log(`Invalid order`);
        } else {
          console.log(`${price.toFixed(2)} BGN`);
        }
      } else if (typeJoinery === "100X150") {
        price = 140;
        price *= countJoinery;
        if (countJoinery >= 40 && countJoinery <= 80) {
          price -= 0.06 * price;
          price += 60;
          console.log(`${price.toFixed(2)} BGN`);
        } else if (countJoinery > 80 && countJoinery <= 99) {
          price -= 0.1 * price;
          price += 60;
          console.log(`${price.toFixed(2)} BGN`);
        } else if (countJoinery > 99) {
          price -= 0.1 * price;
          price += 60;
          price -= 0.04 * price;
          console.log(`${price.toFixed(2)} BGN`);
        } else if (countJoinery < 10) {
          console.log(`Invalid order`);
        } else {
          console.log(`${price.toFixed(2)} BGN`);
        }
      } else if (typeJoinery === "130X180") {
        price = 190;
        price *= countJoinery;
        if (countJoinery >= 20 && countJoinery <= 50) {
          price -= 0.07 * price;
          price += 60;
          console.log(`${price.toFixed(2)} BGN`);
        } else if (countJoinery > 50 && countJoinery <= 99) {
          price -= 0.12 * price;
          price += 60;
          console.log(`${price.toFixed(2)} BGN`);
        } else if (countJoinery > 99) {
          price -= 0.12 * price;
          price += 60;
          price -= 0.04 * price;
          console.log(`${price.toFixed(2)} BGN`);
        } else if (countJoinery < 10) {
          console.log(`Invalid order`);
        } else {
          console.log(`${price.toFixed(2)} BGN`);
        }
      } else if (typeJoinery === "200X300") {
        price = 250;
        price *= countJoinery;
        if (countJoinery >= 25 && countJoinery <= 50) {
          price -= 0.09 * price;
          price += 60;
          console.log(`${price.toFixed(2)} BGN`);
        } else if (countJoinery > 50 && countJoinery <= 99) {
          price -= 0.14 * price;
          price += 60;
          console.log(`${price.toFixed(2)} BGN`);
        } else if (countJoinery > 99) {
          price -= 0.14 * price;
          price += 60;
          price -= 0.04 * price;
          console.log(`${price.toFixed(2)} BGN`);
        } else if (countJoinery < 10) {
          console.log(`Invalid order`);
        } else {
          console.log(`${price.toFixed(2)} BGN`);
        }
      }
  }
}
alominumJoinery(["105", "100X150", "With delivery"]);
