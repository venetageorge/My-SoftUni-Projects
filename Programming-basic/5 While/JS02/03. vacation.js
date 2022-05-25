function vacation(input) {
  let moneyNeededForVacation = Number(input[0]);
  let moneyHave = Number(input[1]);
  let index = 2;
  let spend = 0;
  let dayCounter = 0;

  while (moneyHave < moneyNeededForVacation) {
    let action = input[index];
    index++;
    let amountOfMoney = Number(input[index]);
    dayCounter++;
    switch (action) {
      case "spend":
        moneyHave -= amountOfMoney;
        if (moneyHave < 0) {
          moneyHave = 0;
        }
        spend++;
        break;

      case "save":
        moneyHave += amountOfMoney;
        spend = 0;
        break;
    }
    if (spend >= 5) {
      console.log(`You can't save the money.\n${dayCounter}`);
      break;
    }
    index++;
  }
  if (moneyHave >= moneyNeededForVacation) {
    console.log(`You saved the money for ${dayCounter} days.`);
  }
}
vacation(["250",
"150",
"spend",
"50",
"spend",
"50",
"save",
"100",
"save",
"100"])

