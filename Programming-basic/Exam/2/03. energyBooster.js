function energyBooster(input) {
  let fruit = input[0];
  let setSize = input[1];
  let countOfOrderedSets = Number(input[2]);
  let price = 0;

  if (setSize === "small" && fruit === "Watermelon") {
    price = 2 * 56 * countOfOrderedSets;
    if (price >= 400 && price <= 1000) {
      price -= 0.15 * price;
      console.log(`${price.toFixed(2)} lv.`);
    } else if (price > 1000) {
      price -= 0.5 * price;
      console.log(`${price.toFixed(2)} lv.`);
    } else {
      console.log(`${price.toFixed(2)} lv.`);
    }
  } else if (setSize === "big" && fruit === "Watermelon") {
    price = 5 * 28.70 * countOfOrderedSets;
    if (price >= 400 && price <= 1000) {
      price -= 0.15 * price;
      console.log(`${price.toFixed(2)} lv.`);
    } else if (price > 1000) {
      price -= 0.5 * price;
      console.log(`${price.toFixed(2)} lv.`);
    } else {
      console.log(`${price.toFixed(2)} lv.`);
    }
  } else if (setSize === "small" && fruit === "Mango") {
    price = 2 * 36.66 * countOfOrderedSets;
    if (price >= 400 && price <= 1000) {
      price -= 0.15 * price;
      console.log(`${price.toFixed(2)} lv.`);
    } else if (price > 1000) {
      price -= 0.5 * price;
      console.log(`${price.toFixed(2)} lv.`);
    } else {
      console.log(`${price.toFixed(2)} lv.`);
    }
  } else if (setSize === "big" && fruit === "Mango") {
    price = 5 * 19.60 * countOfOrderedSets;
    if (price >= 400 && price <= 1000) {
      price -= 0.15 * price;
      console.log(`${price.toFixed(2)} lv.`);
    } else if (price > 1000) {
      price -= 0.5 * price;
      console.log(`${price.toFixed(2)} lv.`);
    } else {
      console.log(`${price.toFixed(2)} lv.`);
    }
  } else if (setSize === "small" && fruit === "Pineapple") {
    price = 2 * 42.10 * countOfOrderedSets;
    if (price >= 400 && price <= 1000) {
      price -= 0.15 * price;
      console.log(`${price.toFixed(2)} lv.`);
    } else if (price > 1000) {
      price -= 0.5 * price;
      console.log(`${price.toFixed(2)} lv.`);
    } else {
      console.log(`${price.toFixed(2)} lv.`);
    }
  } else if (setSize === "big" && fruit === "Pineapple") {
    price = 5 * 24.80 * countOfOrderedSets;
    if (price >= 400 && price <= 1000) {
      price -= 0.15 * price;
      console.log(`${price.toFixed(2)} lv.`);
    } else if (price > 1000) {
      price -= 0.5 * price;
      console.log(`${price.toFixed(2)} lv.`);
    } else {
      console.log(`${price.toFixed(2)} lv.`);
    }
  } else if (setSize === "small" && fruit === "Raspberry") {
    price = 2 * 20 * countOfOrderedSets;
    if (price >= 400 && price <= 1000) {
      price -= 0.15 * price;
      console.log(`${price.toFixed(2)} lv.`);
    } else if (price > 1000) {
      price -= 0.5 * price;
      console.log(`${price.toFixed(2)} lv.`);
    } else {
      console.log(`${price.toFixed(2)} lv.`);
    }
  } else if (setSize === "big" && fruit === "Raspberry") {
    price = 5 * 15.20 * countOfOrderedSets;
    if (price >= 400 && price <= 1000) {
      price -= 0.15 * price;
      console.log(`${price.toFixed(2)} lv.`);
    } else if (price > 1000) {
      price -= 0.5 * price;
      console.log(`${price.toFixed(2)} lv.`);
    } else {
      console.log(`${price.toFixed(2)} lv.`);
    }
  }
}
energyBooster(["Mango", "big", "8"]);
