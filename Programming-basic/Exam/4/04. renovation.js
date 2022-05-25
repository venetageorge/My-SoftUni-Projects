function renovation(input) {
  const height = Number(input[0]);
  const width = Number(input[1]);
  let percentNotPaint = Number(input[2]);
  let index = 3;
  let command = input[index];
  index++;
  let totalWithNoPaint = 0;

  let toPaint = Math.round(height * width * 4);
  percent = (percentNotPaint / 100) * toPaint;
  totalWithNoPaint += toPaint - percent;

  while (command !== "Tired!") {
    let litters = Number(command);
    totalWithNoPaint -= litters;

    if (totalWithNoPaint <= 0) {
      break;
    }

    command = input[index];
    index++;
  }
  if (totalWithNoPaint > 0) {
    console.log(`${totalWithNoPaint} quadratic m left.`);
  } else if (totalWithNoPaint === 0) {
    console.log(`All walls are painted! Great job, Pesho!`);
  } else {
    console.log(
      `All walls are painted and you have ${Math.abs(
        totalWithNoPaint
      )} l paint left!`
    );
  }
}
renovation(["3", "5", "10", "2", "3", "4", "Tired!"]);
