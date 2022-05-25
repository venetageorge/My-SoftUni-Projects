function travelAgency(input) {
  const cityName = input[0];
  const packageName = input[1];
  const vipDiscount = input[2];
  const daysStay = Number(input[3]);
  let price = 0;
  let oneDayPrice = 0;

  if (daysStay < 1) {
    console.log("Days must be positive number!");
  } else if (cityName === "Bansko" || cityName === "Borovets") {
    if (packageName === "withEquipment") {
      price = 100;
      if (vipDiscount === "yes") {
          price -= 0.1 * price;
        price *= daysStay;
      } else {
        price *= daysStay;
      }
      if (daysStay > 7) {
        oneDayPrice = price / daysStay;
        price -= oneDayPrice;
      }
      console.log(`The price is ${price.toFixed(2)}lv! Have a nice time!`);
    } else if (packageName === "noEquipment") {
      price = 80;
      if (vipDiscount === "yes") {
          price -= 0.05 * price;
        price *= daysStay;
      } else {
        price *= daysStay;
      }
      if (daysStay > 7) {
        oneDayPrice = price / daysStay;
        price -= oneDayPrice;
      }
      console.log(`The price is ${price.toFixed(2)}lv! Have a nice time!`);
    } else {
      console.log("Invalid input!");
    }
  } else if (cityName === "Varna" || cityName === "Burgas") {
    if (packageName === "withBreakfast") {
      price = 130;
      if (vipDiscount === "yes") {
          price -= 0.12 * price;
        price *= daysStay;
      } else {
        price *= daysStay;
      }
      if (daysStay > 7) {
        oneDayPrice = price / daysStay;
        price -= oneDayPrice;
      }
      console.log(`The price is ${price.toFixed(2)}lv! Have a nice time!`);
    } else if (packageName === "noBreakfast") {
      price = 100;
      if (vipDiscount === "yes") {
          price -= 0.07 * price;
        price *= daysStay;
      } else {
        price *= daysStay;
      }
      if (daysStay > 7) {
        oneDayPrice = price / daysStay;
        price -= oneDayPrice;
      }
      console.log(`The price is ${price.toFixed(2)}lv! Have a nice time!`);
    } else {
      console.log("Invalid input!");
    }
  } else {
    console.log("Invalid input!");
  }
}
travelAgency(["Borovets", "noEquipment", "yes", "6"]);
