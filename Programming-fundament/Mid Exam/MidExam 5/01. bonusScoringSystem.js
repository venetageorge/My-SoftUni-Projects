function bonusScoringSystem(arr) {
  let numOfStudents = Number(arr.shift());
  let totalNumOfLectures = Number(arr.shift());
  let additionalBonus = Number(arr.shift());
  let newArr = [];
  let max = Number.MIN_SAFE_INTEGER;
  let commonAtend;

  for (let i = 0; i < numOfStudents; i++) {
    let countAttendances = Number(arr[i]);
    let bonus = countAttendances / totalNumOfLectures * (5 + additionalBonus);
    newArr.push(bonus);
    for (let element of newArr) {
      let biggest = Number(element);
      if (biggest > max) {
        max = biggest;
        commonAtend = countAttendances;
      }
    }
  }
  if(max > 0) {
  console.log(`Max Bonus: ${Math.ceil(max)}.`);
  console.log(`The student has attended ${commonAtend} lectures.`);
} else {
  console.log(`Max Bonus: 0.`);
    console.log(`The student has attended 0 lectures.`);
}
}
bonusScoringSystem([
    '5',  '25', '30',
    '12', '19', '24',
    '16', '20'
  ]);
bonusScoringSystem([
    '10', '30', '14', '8',
    '23', '27', '28', '15',
    '17', '25', '26', '5',
    '18'
  ]);