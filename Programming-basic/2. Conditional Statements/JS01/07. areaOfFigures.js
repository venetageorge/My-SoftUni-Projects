function areaOfFigures(input) {
  const type = input[0];
  const size1 = Number(input[1]);
  const size2 = Number(input[2]);

  if (type === "square") {
    let area = size1 * size1;
    console.log(area.toFixed(3));
  } else if (type === "rectangle") {
    let area = size1 * size2;
    console.log(area.toFixed(3));
  } else if (type === "circle") {
    let area = Math.PI * Math.pow(size1, 2);
    console.log(area.toFixed(3));
  } else if (type === "triangle") {
    let area = (size1 * size2) / 2;
    console.log(area.toFixed(3));
  }
}
areaOfFigures(["triangle", "4.5", "20"]);
