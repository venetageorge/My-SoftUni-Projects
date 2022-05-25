function trainTheTrainers(input) {
  let index = 0;
  let countOfJury = Number(input[index]);
  index++;
  let text = input[index];
  index++;
  let countOfGrades = 0;
  let avgGrades = 0;

  while (text !== "Finish") {
    countOfGrades++;
    let presentationName = text;
    let temporaryAvgGrde = 0;

    for (let i = 1; i <= countOfJury; i++) {
      let tempGrade = Number(input[index]);
      index++;
      temporaryAvgGrde += tempGrade;
    }
    temporaryAvgGrde = temporaryAvgGrde / countOfJury;
    let presentation = `${presentationName} - ${temporaryAvgGrde.toFixed(2)}.`;
    console.log(presentation);

    avgGrades += temporaryAvgGrde;
    text = input[index];
    index++;
  }
  avgGrades = avgGrades / countOfGrades;
  console.log(`Student's final assessment is ${avgGrades.toFixed(2)}.`);
}
trainTheTrainers([
  "2",
  "Objects and Classes",
  "5.77",
  "4.23",
  "Dictionaries",
  "4.62",
  "5.02",
  "RegEx",
  "2.88",
  "3.42",
  "Finish",
]);
