function fitnessCard(input) {
  let sumHave = Number(input[0]);
  let gender = input[1];
  let age = Number(input[2]);
  let sport = input[3];
  let price = 0;

  switch (sport) {
    case "Gym":
      if (gender === "m") {
        price = 42;
        if (age <= 19) {
          price -= 0.2 * price;
        }
        if (price <= sumHave) {
          console.log(`You purchased a 1 month pass for ${sport}.`);
        } else {
          let diff = Math.abs(price - sumHave);
          console.log(
            `You don't have enough money! You need $${diff.toFixed(2)} more.`
          );
        }
      } else if (gender === "f") {
        price = 35;
        if (age <= 19) {
          price -= 0.2 * price;
        }
        if (price <= sumHave) {
          console.log(`You purchased a 1 month pass for ${sport}.`);
        } else {
          let diff = Math.abs(price - sumHave);
          console.log(
            `You don't have enough money! You need $${diff.toFixed(2)} more.`
          );
        }
      }
      break;
    case "Boxing":
      if (gender === "m") {
        price = 41;
        if (age <= 19) {
          price -= 0.2 * price;
        }
        if (price <= sumHave) {
          console.log(`You purchased a 1 month pass for ${sport}.`);
        } else {
          let diff = Math.abs(price - sumHave);
          console.log(
            `You don't have enough money! You need $${diff.toFixed(2)} more.`
          );
        }
      } else if (gender === "f") {
        price = 37;
        if (age <= 19) {
          price -= 0.2 * price;
        }
        if (price <= sumHave) {
          console.log(`You purchased a 1 month pass for ${sport}.`);
        } else {
          let diff = Math.abs(price - sumHave);
          console.log(
            `You don't have enough money! You need $${diff.toFixed(2)} more.`
          );
        }
      }
      break;
    case "Yoga":
      if (gender === "m") {
        price = 45;
        if (age <= 19) {
          price -= 0.2 * price;
        }
        if (price <= sumHave) {
          console.log(`You purchased a 1 month pass for ${sport}.`);
        } else {
          let diff = Math.abs(price - sumHave);
          console.log(
            `You don't have enough money! You need $${diff.toFixed(2)} more.`
          );
        }
      } else if (gender === "f") {
        price = 42;
        if (age <= 19) {
          price -= 0.2 * price;
        }
        if (price <= sumHave) {
          console.log(`You purchased a 1 month pass for ${sport}.`);
        } else {
          let diff = Math.abs(price - sumHave);
          console.log(
            `You don't have enough money! You need $${diff.toFixed(2)} more.`
          );
        }
      }
      break;
    case "Zumba":
      if (gender === "m") {
        price = 34;
        if (age <= 19) {
          price -= 0.2 * price;
        }
        if (price <= sumHave) {
          console.log(`You purchased a 1 month pass for ${sport}.`);
        } else {
          let diff = Math.abs(price - sumHave);
          console.log(
            `You don't have enough money! You need $${diff.toFixed(2)} more.`
          );
        }
      } else if (gender === "f") {
        price = 31;
        if (age <= 19) {
          price -= 0.2 * price;
        }
        if (price <= sumHave) {
          console.log(`You purchased a 1 month pass for ${sport}.`);
        } else {
          let diff = Math.abs(price - sumHave);
          console.log(
            `You don't have enough money! You need $${diff.toFixed(2)} more.`
          );
        }
      }
      break;
    case "Dances":
      if (gender === "m") {
        price = 51;
        if (age <= 19) {
          price -= 0.2 * price;
        }
        if (price <= sumHave) {
          console.log(`You purchased a 1 month pass for ${sport}.`);
        } else {
          let diff = Math.abs(price - sumHave);
          console.log(
            `You don't have enough money! You need $${diff.toFixed(2)} more.`
          );
        }
      } else if (gender === "f") {
        price = 53;
        if (age <= 19) {
          price -= 0.2 * price;
        }
        if (price <= sumHave) {
          console.log(`You purchased a 1 month pass for ${sport}.`);
        } else {
          let diff = Math.abs(price - sumHave);
          console.log(
            `You don't have enough money! You need $${diff.toFixed(2)} more.`
          );
        }
      }
      break;
    case "Pilates":
      if (gender === "m") {
        price = 39;
        if (age <= 19) {
          price -= 0.2 * price;
        }
        if (price <= sumHave) {
          console.log(`You purchased a 1 month pass for ${sport}.`);
        } else {
          let diff = Math.abs(price - sumHave);
          console.log(
            `You don't have enough money! You need $${diff.toFixed(2)} more.`
          );
        }
      } else if (gender === "f") {
        price = 37;
        if (age <= 19) {
          price -= 0.2 * price;
        }
        if (price <= sumHave) {
          console.log(`You purchased a 1 month pass for ${sport}.`);
        } else {
          let diff = Math.abs(price - sumHave);
          console.log(
            `You don't have enough money! You need $${diff.toFixed(2)} more.`
          );
        }
      }
      break;
  }
}
fitnessCard(["10", "m", "50", "Pilates"]);
