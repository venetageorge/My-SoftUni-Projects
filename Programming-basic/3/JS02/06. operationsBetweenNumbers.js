function operationsBetweenNumbers(input) {
  const n1 = Number(input[0]);
  const n2 = Number(input[1]);
  const operator = input[2];
  let numType = 0;

  if (operator === "+") {
    if ((n1 + n2) % 2 === 0) {
      numType = "even";
    } else {
      numType = "odd";
    }
    console.log(`${n1} ${operator} ${n2} = ${n1 + n2} - ${numType}`);
  } else if (operator === "-") {
    if ((n1 - n2) % 2 === 0) {
      numType = "even";
    } else {
      numType = "odd";
    }
    console.log(`${n1} ${operator} ${n2} = ${n1 - n2} - ${numType}`);
  } else if (operator === "*") {
    if ((n1 * n2) % 2 === 0) {
      numType = "even";
    } else {
      numType = "odd";
    }
    console.log(`${n1} ${operator} ${n2} = ${n1 * n2} - ${numType}`);
  } else if (operator === "/") {
    if (n2 === 0) {
      console.log(`Cannot divide ${n1} by zero`);
    } else {
      console.log(`${n1} ${operator} ${n2} = ${(n1 / n2).toFixed(2)}`);
    }
  } else if (operator === "%") {
    if (n2 === 0) {
      console.log(`Cannot divide ${n1} by zero`);
    } else {
      console.log(`${n1} ${operator} ${n2} = ${n1 % n2}`);
    }
  }
}
operationsBetweenNumbers(["10", "12", "+"]);
