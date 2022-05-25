function cinemaTickets(input) {
  let index = 0;
  let command = input[index];
  let standardCounter = 0;
  let kidCounter = 0;
  let studentCounter = 0;

  while (command !== "Finish") {
    let movieName = command;
    index++;
    let seatsCounter = Number(input[index]);
    let freeSeats = seatsCounter;
    index++;
    let type = input[index];

    while (type !== "End") {
      switch (type) {
        case "standard":
          standardCounter++;
          break;
        case "kid":
          kidCounter++;
          break;
        case "student":
          studentCounter++;
          break;
      }
      freeSeats--;
      if (freeSeats === 0) {
        break;
      }
      index++;
      type = input[index];
    }
    let sellTickets = seatsCounter - freeSeats;
    let percent = (sellTickets / seatsCounter) * 100;
    console.log(`${movieName} - ${percent.toFixed(2)}% full.`);
    index++;
    command = input[index];
  }
  let total = kidCounter + standardCounter + studentCounter;
  console.log(`Total tickets: ${total}`);
  console.log(
    `${((studentCounter / total) * 100).toFixed(2)}% student tickets.`
  );
  console.log(
    `${((standardCounter / total) * 100).toFixed(2)}% standard tickets.`
  );
  console.log(`${((kidCounter / total) * 100).toFixed(2)}% kids tickets.`);
}
cinemaTickets([
  "Taxi",
  "10",
  "standard",
  "kid",
  "student",
  "student",
  "standard",
  "standard",
  "End",
  "Scary Movie",
  "6",
  "student",
  "student",
  "student",
  "student",
  "student",
  "student",
  "Finish",
]);