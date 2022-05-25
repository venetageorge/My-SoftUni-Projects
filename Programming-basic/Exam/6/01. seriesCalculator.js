function seriesCalculator(input) {
  const nameOfTheSerial = input[0];
  const countSeasons = Number(input[1]);
  const countEpisode = Number(input[2]);
  let timeOneEpWithoutAdvert = Number(input[3]);
  let advertising = 0.2;
  let special = 10;

  let timeWithAdvert = timeOneEpWithoutAdvert * advertising;
  let oneEpisode = timeWithAdvert + timeOneEpWithoutAdvert;
  let specialEpisode = countSeasons * special;
  let totalTime = oneEpisode * countEpisode * countSeasons + specialEpisode;
  console.log(
    `Total time needed to watch the ${nameOfTheSerial} series is ${Math.floor(
      totalTime
    )} minutes.`
  );
}
seriesCalculator(["Riverdale", "3", "21", "45"]);
