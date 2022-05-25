function gymnastics(input) {
  const country = input[0];
  const tool = input[1];
  let priceDifficulty = 0;
  let pricePerformance = 0;
  let maxPerformance = 20;

  switch (country) {
    case "Russia":
      if (tool === "ribbon") {
        priceDifficulty += 9.1;
        pricePerformance += 9.4;
      } else if (tool === "hoop") {
        priceDifficulty += 9.3;
        pricePerformance += 9.8;
      } else {
        priceDifficulty += 9.6;
        pricePerformance += 9.0;
      }
      break;
    case "Bulgaria":
      if (tool === "ribbon") {
        priceDifficulty += 9.6;
        pricePerformance += 9.4;
      } else if (tool === "hoop") {
        priceDifficulty += 9.55;
        pricePerformance += 9.75;
      } else {
        priceDifficulty += 9.5;
        pricePerformance += 9.4;
      }
      break;
    case "Italy":
      if (tool === "ribbon") {
        priceDifficulty += 9.2;
        pricePerformance += 9.5;
      } else if (tool === "hoop") {
        priceDifficulty += 9.45;
        pricePerformance += 9.35;
      } else {
        priceDifficulty += 9.7;
        pricePerformance += 9.15;
      }
      break;
  }
  let total = priceDifficulty + pricePerformance;
  let diff = maxPerformance - total;
  let percent = (diff / maxPerformance) * 100;
  console.log(`The team of ${country} get ${total.toFixed(3)} on ${tool}.`);
  console.log(`${percent.toFixed(2)}%`);
}
gymnastics(["Italy", "hoop"]);
