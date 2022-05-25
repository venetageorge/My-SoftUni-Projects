function computerFirm(input) {
  let countComputers = Number(input[0]);
  let index = 1;
  let num = "" + input[index];
  let rating = 0;
  let sales = 0;
  let total = 0;
  let totalRating = 0;

  for (let i = 1; i <= countComputers; i++) {
    rating = num % 10;
    sales = Number(num.charAt(0) + num.charAt(1));

    if (rating === 2) {
      sales = 0 * sales;
    } else if (rating === 3) {
      sales = 0.5 * sales;
    } else if (rating === 4) {
      sales = 0.7 * sales;
    } else if (rating === 5) {
      sales = 0.85 * sales;
    } else if (rating === 6) {
      sales = 1 * sales;
    }

    totalRating += rating;
    total += sales;
    index++;
    num = "" + input[index];
  }
  let avgRating = totalRating / countComputers;
  console.log(total.toFixed(2));
  console.log(avgRating.toFixed(2));
}
computerFirm(["3", "103", "103", "103"]);
