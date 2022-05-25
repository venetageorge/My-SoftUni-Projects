function cinema(input) {
  const typeOfProjection = input[0];
  const rowCount = Number(input[1]);
  const columnCount = Number(input[2]);

  let income = 0;

  if (typeOfProjection === "Premiere") {
    income = rowCount * columnCount * 12.0;
  } else if (typeOfProjection === "Normal") {
    income = rowCount * columnCount * 7.5;
  } else if (typeOfProjection === "Discount") {
    income = rowCount * columnCount * 5.0;
  }
  console.log(`${income.toFixed(2)} leva`);
}
cinema(["Discount", "12", "30"]);
