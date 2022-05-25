function suitcasesLoad(input) {
  let capacity = Number(input[0]);
  let index = 1;
  let command = input[index];
  let counter = 0;

  while (command !== "End") {
    if (index % 3 === 0) {
      let volume = Number(command);
      let extra = volume + 0.1 * volume;
      if (capacity < extra) {
        break;
      }
      capacity -= extra;
    } else {
      let volume = Number(command);
      if (capacity < volume) {
        break;
      }
      capacity -= volume;
    }
    index++;
    command = input[index];
    counter++;
  }

  if (command === "End") {
    console.log(`Congratulations! All suitcases are loaded!`);
  } else {
    console.log(`No more space!`);
  }
  console.log(`Statistic: ${counter} suitcases loaded.`);
}
suitcasesLoad(["550", "100", "252", "72", "End"]);
