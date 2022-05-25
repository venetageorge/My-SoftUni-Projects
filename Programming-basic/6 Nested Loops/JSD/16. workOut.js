function workOut(input) {
  let index = 0;
  let countDays = Number(input[index]);
  index++;
  let kilometers = Number(input[index]);
  index++;
  let target = 1000;
  let percentage = Number(input[index]);
  let kilometersTotal = 0;
  let per = 0;

  for (let i = 0; i <= countDays; i++) {
    if (i === 0) {
      kilometers;
    } else {
      per = (percentage / 100) * kilometers;
      kilometers += per;
      index++;
      percentage = Number(input[index]);
    }

    kilometersTotal += kilometers;
    if (kilometersTotal >= target) {
      break;
    }
  }
  if (kilometersTotal >= target) {
    let diff = kilometersTotal - target;
    console.log(
      `You've done a great job running ${Math.ceil(diff)} more kilometers!`
    );
  } else {
    let diff = target - kilometersTotal;
    console.log(
      `Sorry Mrs. Ivanova, you need to run ${Math.ceil(diff)} more kilometers`
    );
  }
}
workOut(["4", "100", "30", "50", "60", "80"]);
