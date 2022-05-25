function tournamentOfChristmas(input) {
  let daysCount = Number(input[0]);
  let index = 1;
  let command = input[index];
  let winPrice = 20;
  let total = 0;
  let win = 0;
  let lose = 0;
  
  for (let i = 1; i <= daysCount; i++) {
    command = input[index];
    let winCounter = 0;
    let loseCounter = 0;

    while (command !== "Finish") {
      command = input[index];
      index++;
      let res = input[index];

      switch (res) {
        case "win":
          total += winPrice;
          winCounter++;
          break;
        case "lose":
          loseCounter++;
          break;
      }
      index++;
      command = input[index];
    }
    if (winCounter > loseCounter) {
      total += 0.1 * (winCounter * winPrice);
      win++;
    } else {
      total;
      lose++;
    }
    index++;
  }
  if (win > lose) {
    total += 0.2 * total;
    console.log(
      `You won the tournament! Total raised money: ${total.toFixed(2)}`
    );
  } else {
    console.log(
      `You lost the tournament! Total raised money: ${total.toFixed(2)}`
    );
  }
}
tournamentOfChristmas(["2",
"volleyball",
"win",
"football",
"lose",
"basketball",
"win",
"Finish",
"golf",
"win",
"tennis",
"win",
"badminton",
"win",
"Finish"])
