function traveling(input) {
  let index = 0;
  let text = input[index];
  index++;
  let sum = Number(input[index]);
  index++;
  let n = Number(input[index]);
  index++;

  while(text !== "End"){

      while(n !== "End"){
      n += Number(input[index]);
      index++;

      if (sum <= n) {
          n = 0;
          console.log(`Going to ${text}!`);
          text = input[index];
          index++;
          sum = Number(input[index]);
          index++;
          break;
      }
    } 
  }
}
traveling([
  "Greece",
  "1000",
  "200",
  "200",
  "300",
  "100",
  "150",
  "240",
  "Spain",
  "1200",
  "300",
  "500",
  "193",
  "423",
  "End"]);
