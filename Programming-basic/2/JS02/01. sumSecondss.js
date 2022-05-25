function sumSeconds(input) {
  const first = Number(input[0]);
  const second = Number(input[1]);
  const third = Number(input[2]);

  const total = first + second + third;
  const minutes = Math.floor(total / 60);
  const seconds = total % 60;

  if (seconds < 10) {
    console.log(`${minutes}:0${seconds}`);
  } else {
    console.log(`${minutes}:${seconds}`);
  }
}
sumSeconds(["14", "12", "10"]);
