function easterGuests(input) {
  const guestsSum = Number(input[0]);
  let lubosBudget = Number(input[1]);
  let easterBreadPrice = 4;
  let eggs = 0.45;

  let easterBreadCount = Math.ceil(guestsSum / 3);
  let eggsCount = guestsSum * 2;
  let easterBreadTotal = easterBreadPrice * easterBreadCount;
  let eggsTotal = eggsCount * eggs;
  let totalPrice = easterBreadTotal + eggsTotal;

  let diff = Math.abs(totalPrice - lubosBudget);
  if (totalPrice > lubosBudget) {
    console.log(
      `Lyubo doesn't have enough money.\nHe needs ${diff.toFixed(2)} lv. more.`
    );
  } else {
    console.log(
      `Lyubo bought ${easterBreadCount} Easter bread and ${eggsCount} eggs.\nHe has ${diff.toFixed(
        2
      )} lv. left.`
    );
  }
}
easterGuests(["9", "12"]);
