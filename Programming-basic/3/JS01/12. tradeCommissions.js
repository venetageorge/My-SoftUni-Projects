function tradeCommissions(input) {
  let city = input[0];
  let volume = Number(input[1]);

  if (city == "Sofia") {
    if (volume >= 0 && volume <= 500) {
      console.log(`${(0.05 * volume).toFixed(2)}`);
    } else if (volume > 500 && volume <= 1000) {
      console.log(`${(0.07 * volume).toFixed(2)}`);
    } else if (volume > 1000 && volume <= 10000) {
      console.log(`${(0.08 * volume).toFixed(2)}`);
    } else if (volume > 10000) {
      console.log(`${(0.12 * volume).toFixed(2)}`);
    } else {
      console.log("error");
    }
  } else if (city == "Varna") {
    if (volume >= 0 && volume <= 500) {
      console.log(`${(0.045 * volume).toFixed(2)}`);
    } else if (volume > 500 && volume <= 1000) {
      console.log(`${(0.075 * volume).toFixed(2)}`);
    } else if (volume > 1000 && volume <= 10000) {
      console.log(`${(0.1 * volume).toFixed(2)}`);
    } else if (volume > 10000) {
      console.log(`${(0.13 * volume).toFixed(2)}`);
    } else {
      console.log("error");
    }
  } else if (city == "Plovdiv") {
    if (volume >= 0 && volume <= 500) {
      console.log(`${(0.055 * volume).toFixed(2)}`);
    } else if (volume > 500 && volume <= 1000) {
      console.log(`${(0.08 * volume).toFixed(2)}`);
    } else if (volume > 1000 && volume <= 10000) {
      console.log(`${(0.12 * volume).toFixed(2)}`);
    } else if (volume > 10000) {
      console.log(`${(0.145 * volume).toFixed(2)}`);
    } else {
      console.log("error");
    }
  } else {
    console.log("error");
  }
}
tradeCommissions(["Plovdiv", "499.99"]);