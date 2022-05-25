function easterShop(input) {
  let startEggsCount = Number(input[0]);
  let index = 1;
  let command = input[index];
  index++;
  let countEggs = Number(input[index]);
  let sold = 0;
  let diff = 0;

  while (command !== "Close") {
    countEggs = Number(input[index]);

    if (command === "Buy") {
      if (countEggs > startEggsCount) {
        diff += startEggsCount;
        break;
      }
      sold += countEggs;
      startEggsCount -= countEggs;
    } else {
      startEggsCount += countEggs;
    }
    index++;
    command = input[index];
    index++;
  }

  if (command === "Close") {
    console.log(`Store is closed!\n${sold} eggs sold.`);
  } else {
    console.log(`Not enough eggs in store!\nYou can buy only ${diff}.`);
  }
}
easterShop(["13", "Buy", "8", "Fill", "3", "Buy", "10"]);
