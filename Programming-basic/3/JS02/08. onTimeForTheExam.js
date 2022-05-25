function onTimeForTheExam(input) {
  const examHour = Number(input[0]);
  const examMinute = Number(input[1]);
  const arrivalHour = Number(input[2]);
  const arrivalMinute = Number(input[3]);

  const totalExamMinutes = examHour * 60 + examMinute;
  const totalArrivalMinutes = arrivalHour * 60 + arrivalMinute;
  const differenceTime = Math.abs(totalExamMinutes - totalArrivalMinutes);
  const hourDifference = Math.floor(differenceTime / 60);
  let minutesDifference = differenceTime % 60;

  if (
    minutesDifference === 0 ||
    (minutesDifference < 10 && hourDifference > 0)
  ) {
    minutesDifference = `0${minutesDifference}`;
  }
  if (totalArrivalMinutes === totalExamMinutes) {
    console.log(`On time`);
  } else if (totalArrivalMinutes > totalExamMinutes && differenceTime < 60) {
    console.log(`Late`);
    console.log(`${minutesDifference} minutes after the start`);
  } else if (totalArrivalMinutes > totalExamMinutes && differenceTime >= 60) {
    console.log(`Late`);
    console.log(`${hourDifference}:${minutesDifference} hours after the start`);
  } else if (differenceTime <= 30) {
    console.log(`On time`);
    console.log(`${minutesDifference} minutes before the start`);
  } else if (differenceTime > 30 && differenceTime < 60) {
    console.log(`Early`);
    console.log(`${minutesDifference} minutes before the start`);
  } else {
    console.log(`Early`);
    console.log(
      `${hourDifference}:${minutesDifference} hours before the start`
    );
  }
}
onTimeForTheExam(["9", "30", "9", "50"]);
