function highJump(input) {
  let index = 0;
  let wishedJump = Number(input[index]);
  index++;
  let currentJump = Number(input[index]);
  let minJump = wishedJump - 30;
  let counter = 0;

  while (minJump <= wishedJump) {
    let success = false;

    for (let i = 0; i < 3; i++) {
      counter++;
      currentJump = Number(input[index]);
      index++;

      if (currentJump > minJump) {
        success = true;
        minJump += 5;
        break;
      }
    }
    if (!success) {
      console.log(`Tihomir failed at ${currentJump}cm after ${counter} jumps.`);
      break;
    }
  }
  if (minJump > wishedJump) {
    console.log(
      `Tihomir succeeded, he jumped over ${wishedJump}cm after ${counter} jumps.`
    );
  }
}
highJump(["250", "225", "224", "225", "228", "231", "235", "234", "235"]);
