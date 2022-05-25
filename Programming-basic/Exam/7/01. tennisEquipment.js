function tennisEquipment([arg1,arg2,arg3]) {
    const priceTennisRacket = Number(arg1);
    const countTennisRacket = Number(arg2);
    const countSneakersPair = Number(arg3);

    let tennisRacketPrice = priceTennisRacket * countTennisRacket;
    let sneakersPairPrice = priceTennisRacket / 6;
    let sneakersPrice = countSneakersPair * sneakersPairPrice;
    let otherEquipment = (tennisRacketPrice + sneakersPrice) * 0.2;
    let total = tennisRacketPrice + sneakersPrice + otherEquipment;

    let djokovicToPay = total / 8;
    let sponsorsToPay = total * 7 / 8;
    console.log(`Price to be paid by Djokovic ${Math.floor(djokovicToPay)}`);
    console.log(`Price to be paid by sponsors ${Math.ceil(sponsorsToPay)}`);
}
tennisEquipment([386, 7, 4]);