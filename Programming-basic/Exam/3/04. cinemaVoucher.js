function cinemaVoucher(input) {
  let voucherSum = Number(input[0]);
  let index = 1;
  let command = input[index];
  let ticketPaid = 0;
  let otherPaid = 0;
  let letter1 = 0;
  let letter2 = 0;
  let letter3 = 0;

  while (command !== "End") {
    let price = 0;

    if (command.length > 8) {
      letter1 = command.codePointAt(0);
      letter2 = command.codePointAt(1);
      price += letter1 + letter2;
      if (voucherSum - price < 0) {
        break;
      } else {
        ticketPaid++;
        voucherSum -= price;
      }
    } else {
      letter3 = command.codePointAt(0);
      price += letter3;
      if (voucherSum - price < 0) {
        break;
      } else {
        otherPaid++;
        voucherSum -= price;
      }
    }
    if (command === "End") {
      break;
    }

    index++;
    command = input[index];
  }
  console.log(`${ticketPaid}`);
  console.log(`${otherPaid}`);
}
cinemaVoucher([
  "1500",
  "Avengers: Endgame",
  "Bohemian Rhapsody",
  "Deadpool 2",
  "End",
]);