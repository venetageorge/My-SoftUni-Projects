function darts(input) {
  const nameGamer = input[0];
  let index = 1;
  let command = input[index];
  index++;
  let points = Number(input[index]);
  let basisPoints = 301;
  let counter = 0;
  let counterLose = 0;

  while (command !== "Retire") {
    points = Number(input[index]);

    let avgPts = 0;
    if (command === "Single") {
      avgPts = points;
      if (avgPts > basisPoints) {
        counterLose++;
      } else {
      basisPoints -= avgPts;
      counter++;
      } 
    } else if (command === "Double") {
      avgPts = points * 2;
      if (avgPts > basisPoints) {
        counterLose++;
      } else {
      basisPoints -= avgPts;
      counter++;
      }
    } else {
      avgPts = points * 3;
      if (avgPts > basisPoints) {
        counterLose++;
      } else {
      basisPoints -= avgPts;
      counter++;
      }
    }
    
    if (basisPoints === 0) {
      break;
    } 

    index++;
    command = input[index];
    index++;
  }
  if (command === "Retire") {
    console.log(
      `${nameGamer} retired after ${counterLose} unsuccessful shots.`
    );
  } else {
    console.log(`${nameGamer} won the leg with ${counter} shots.`);
  }
}
darts(["Rob Cross",
"Triple",
"20",
"Triple",
"20",
"Triple",
"20",
"Triple",
"20",
"Double",
"20",
"Triple",
"20",
"Double",
"5",
"Triple",
"10",
"Double",
"6",
"Retire"]);