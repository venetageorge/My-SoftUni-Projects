function fishingBoat(input) {
    const springPrice = 3000;
    const summerAndAutumnPrice = 4200;
    const winterPrice = 2600;
    const budget = Number(input[0]);
    const season = input[1];
    const countFisherman = Number(input[2]);
    let totalMoney = 0;
  
    switch(season) {
      case "Winter":
        totalMoney = winterPrice;
        break;
        case "Spring":
        totalMoney = springPrice;
        break;
      case "Summer":
        totalMoney = summerAndAutumnPrice;
        break;
      case "Autumn":
        totalMoney = summerAndAutumnPrice;
        break;
    }
    if (countFisherman <= 6) {
      totalMoney -= totalMoney * 0.1;
    } else if (countFisherman >= 7 && countFisherman <= 11) {
      totalMoney -= totalMoney * 0.15;
    } else if (countFisherman >= 12) {
      totalMoney -= totalMoney * 0.25;
    }
  
    if (countFisherman % 2 === 0 && season != "Autumn") {
      totalMoney -= totalMoney * 0.05;
    }
  
    if (budget >= totalMoney) {
      const moneyLeft = budget - totalMoney;
      console.log(`Yes! You have ${moneyLeft.toFixed(2)} leva left.`);
    } else {
      const moneyNeeded = totalMoney - budget;
      console.log(`Not enough money! You need ${moneyNeeded.toFixed(2)} leva.`);
    }
  }
fishingBoat(["3000", "Summer", "11"]);
