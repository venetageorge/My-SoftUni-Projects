function mobileOperator(input) {
  let term = input[0];
  let type = input[1];
  let mobileInternet = input[2];
  let countMonth = Number(input[3]);
  let price = 0;

  switch (type) {
    case "Small":
      if (term === "one") {
        price = 9.98;
      } else {
        price = 8.58;
      }
      break;
    case "Middle":
      if (term === "one") {
        price = 18.99;
      } else {
        price = 17.09;
      }
      break;
    case "Large":
      if (term === "one") {
        price = 25.98;
      } else {
        price = 23.59;
      }
      break;
    case "ExtraLarge":
      if (term === "one") {
        price = 35.99;
      } else {
        price = 31.79;
      }
      break;
  }

  if (mobileInternet === "yes") {
    if (price <= 10) {
      price += 5.5;
    } else if (price > 10 && price <= 30) {
      price += 4.35;
    } else if (price > 30) {
      price += 3.85;
    } else {
      price;
    }
  }
  if (term === "two") {
    price -= 0.0375 * price;
  }
  let total = countMonth * price;
  console.log(`${total.toFixed(2)} lv.`);
}
mobileOperator(["two", "Large", "no", "10"]);
