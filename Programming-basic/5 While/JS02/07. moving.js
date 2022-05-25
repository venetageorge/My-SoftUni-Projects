function moving(input) {
  let width = Number(input[0]);
  let length = Number(input[1]);
  let height = Number(input[2]);
  let cubicMeter = width * length * height;
  let index = 3;
  let countOfBoxes = input[index];
  index++;

  while (countOfBoxes !== "Done") {
    let space = Number(countOfBoxes);
    cubicMeter -= space;

    if (cubicMeter <= 0) {
      console.log(
        `No more free space! You need ${Math.abs(
          cubicMeter
        )} Cubic meters more.`
      );
      break;
    }
    countOfBoxes = input[index];
    index++;
  }
  if (countOfBoxes === "Done") {
    let leftSpace = cubicMeter;
    console.log(`${leftSpace} Cubic meters left.`);
  }
}
moving(["10", "10", "2", "20", "20", "20", "20", "122"]);