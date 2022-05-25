function cinemaTickets(input) {
  let index = 0;
  let command = input[index];
  index++;
  let count = Number(input[index]);
  let type = input[index];
  let student = 0;
  let standard = 0;
  let kid = 0;
  let totalCounter = 0;
  let total = 0;
  let studentCounter = 0;
  let standardCounter = 0;
  let kidCounter = 0;

  while (command !== "Finish") {
    count = Number(input[index]);
    index++;
    type = input[index];
    index++;

    while (type !== "End") {
      if (type === "student") {
        student++;
        totalCounter++;
      } else if (type === "standard") {
        standard++;
        totalCounter++;
      } else if (type === "kid") {
        kid++;
        totalCounter++;
      }

      type = input[index];
      index++;

      if (type === "Finish") {
        break;
      }
    }

    let percent = (totalCounter / count) * 100;
    console.log(`${command} - ${percent.toFixed(2)}% full.`);
    total += totalCounter;
    totalCounter = 0;
    studentCounter = student;
    standardCounter = standard;
    kidCounter = kid;
    command = input[index];

    if (type === "Finish") {
      break;
    } else {
      index++;
    }
  }

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
  "The Matrix",
  "20",
  "student",
  "standard",
  "kid",
  "kid",
  "student",
  "student",
  "standard",
  "student",
  "End",
  "The Green Mile",
  "17",
  "student",
  "standard",
  "standard",
  "student",
  "standard",
  "student",
  "End",
  "Amadeus",
  "3",
  "standard",
  "standard",
  "standard",
  "Finish",
]);
