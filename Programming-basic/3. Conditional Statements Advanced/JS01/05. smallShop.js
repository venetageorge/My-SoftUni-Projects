function smallShop(input) {
  let typeOfProduct = input[0];
  let cityName = input[1];
  let count = Number(input[2]);

  if (cityName == "Sofia") {
    if (typeOfProduct == "coffee") {
      console.log(count * 0.5);
    } else if (typeOfProduct == "water") {
      console.log(count * 0.8);
    } else if (typeOfProduct == "beer") {
      console.log(count * 1.2);
    } else if (typeOfProduct == "sweets") {
      console.log(count * 1.45);
    } else if (typeOfProduct == "peanuts") {
      console.log(count * 1.6);
    }
  } else if (cityName == "Plovdiv") {
    if (typeOfProduct == "coffee") {
      console.log(count * 0.4);
    } else if (typeOfProduct == "water") {
      console.log(count * 0.7);
    } else if (typeOfProduct == "beer") {
      console.log(count * 1.15);
    } else if (typeOfProduct == "sweets") {
      console.log(count * 1.3);
    } else if (typeOfProduct == "peanuts") {
      console.log(count * 1.5);
    }
  } else if (cityName == "Varna") {
    if (typeOfProduct == "coffee") {
      console.log(count * 0.45);
    } else if (typeOfProduct == "water") {
      console.log(count * 0.7);
    } else if (typeOfProduct == "beer") {
      console.log(count * 1.1);
    } else if (typeOfProduct == "sweets") {
      console.log(count * 1.35);
    } else if (typeOfProduct == "peanuts") {
      console.log(count * 1.55);
    }
  }
}
smallShop(["water", "Plovdiv", "3"]);
