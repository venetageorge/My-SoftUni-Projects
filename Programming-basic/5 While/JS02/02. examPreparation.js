function examPreparation(input) {
  let countOfBadScore = Number(input[0]);
  let index = 1;
  let command = input[index];
  let numberOfProblems = 0;
  let avgScore = 0;
  let countBadGrades = 0;

  while (command !== "Enough") {
    numberOfProblems++;
    index++;
    currentGrade = Number(input[index]);
    avgScore += currentGrade;
    if (currentGrade <= 4) {
      countBadGrades++;
    }
    if (countBadGrades >= countOfBadScore) {
      console.log(`You need a break, ${countBadGrades} poor grades.`);
      break;
    }
    index++;
    command = input[index];
  }
  if (command === "Enough") {
    let avgGrade = (avgScore / numberOfProblems).toFixed(2);
    console.log(`Average score: ${avgGrade}`);
    console.log(`Number of problems: ${numberOfProblems}`);
    index -= 2;
    let command = input[index];
    console.log(`Last problem: ${command}`);
  }
}
examPreparation(["2", "Income", "3", "Game Info", "6", "Best Player", "4"]);
