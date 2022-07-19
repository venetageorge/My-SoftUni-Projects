function lettersChangeNumbers(text) {
  let word = text.split(" ").filter((a) => a !== "");
  let res = 0;

  for (let el of word) {
    el = el.split("");
    let letterBefore = el.shift();
    let letterAfter = el.pop();
    let num = Number(el.join(""));
    let charLBefore = letterBefore.charCodeAt();
    let charLAfter = letterAfter.charCodeAt();
    if (charLBefore >= 65 && charLBefore <= 90) {
      charLBefore -= 64;
      res += num / charLBefore;
    } else {
      charLBefore -= 96;
      res += num * charLBefore;
    }
    if (charLAfter >= 65 && charLAfter <= 90) {
      charLAfter -= 64;
      res -= charLAfter;
    } else {
      charLAfter -= 96;
      res += charLAfter;
    }
  }
  console.log(res.toFixed(2));
}
lettersChangeNumbers('A12b s17G');
lettersChangeNumbers('P34562Z q2576f   H456z');
lettersChangeNumbers('a1A');