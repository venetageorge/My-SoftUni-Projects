function firm(input) {
    const neededHours = Number(input[0]);
    const daysTheFirmHave = Number(input[1]); 
    const countOvertimeWorkers = Number(input[2]); 
    
    let percentForWorkshop = daysTheFirmHave - (0.1 * daysTheFirmHave);
    let workingHours = percentForWorkshop * 8;
    let overTime = countOvertimeWorkers * (2 * daysTheFirmHave);
    let total = Math.floor(workingHours + overTime);

    if (total >= neededHours) {
        let rest = total - neededHours;
        console.log(`Yes! ${rest} hours left.`)
    } else {
        let rest = neededHours - total;
        console.log(`Not enough time!${rest} hours needed.`);
    }
}
firm(["99", "3", "1"]);