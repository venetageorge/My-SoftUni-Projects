function hotelRooms(input) {
  const season = input[0];
  const nightsCount = Number(input[1]);
  const studioMaiAndOctober = 50;
  const apartmentMaiAndOctober = 65;
  const studioJuneAndSeptember = 75.2;
  const apartmentJuneAndSeptember = 68.7;
  const studioJulyAndAugust = 76;
  const apartmentJulyAndAugust = 77;
  let totalMoneyStudio = 0;
  let totalMoneyApartment = 0;

  switch (season) {
    case "May":
    case "October":
      totalMoneyStudio = studioMaiAndOctober * nightsCount;
      totalMoneyApartment = apartmentMaiAndOctober * nightsCount;

      if (nightsCount > 7 && nightsCount < 14) {
        totalMoneyStudio -= totalMoneyStudio * 0.05;
      } else if (nightsCount > 14) {
        totalMoneyStudio -= totalMoneyStudio * 0.3;
      }
      break;
    case "June":
    case "September":
      totalMoneyStudio = studioJuneAndSeptember * nightsCount;
      totalMoneyApartment = apartmentJuneAndSeptember * nightsCount;
      if (nightsCount > 14) {
        totalMoneyStudio -= totalMoneyStudio * 0.2;
      }
      break;
    case "July":
    case "August":
      totalMoneyStudio = studioJulyAndAugust * nightsCount;
      totalMoneyApartment = apartmentJulyAndAugust * nightsCount;
      break;
  }
  if (nightsCount > 14) {
    totalMoneyApartment -= totalMoneyApartment * 0.1;
  }
  console.log(`Apartment: ${totalMoneyApartment.toFixed(2)} lv.`);
  console.log(`Studio: ${totalMoneyStudio.toFixed(2)} lv.`);
}
hotelRooms(["May", "15"]);
