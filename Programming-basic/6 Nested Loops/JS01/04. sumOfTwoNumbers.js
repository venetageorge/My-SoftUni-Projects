function sumOfTwoNumbers(input) {
  let startNum = Number(input[0]);
  let endNum = Number(input[1]);
  let magicNum = Number(input[2]);
  let enough = false;
  let counter = 0;

  for (let i = startNum; i <= endNum; i++) {
    for (let i1 = startNum; i1 <= endNum; i1++) {
      counter++;
      let res = i + i1;
      if (res === magicNum) {
        console.log(`Combination N:${counter} (${i} + ${i1} = ${res})`);
        enough = true;
        break;
      }
    }
    if (enough) {
      break;
    }
  }
  if (!enough) {
      console.log(`${counter} combinations - neither equals ${magicNum}`);
  }
}
sumOfTwoNumbers(["23", "24", "20"]);
