function sleepyTomCat(input) {
    const freeDays = Number(input[0]);

    let playInFreeDays = freeDays * 127;
    let workingDaysCount = 365 - freeDays;
    let playInWorkingDays = workingDaysCount * 63; 
    let totalPlayMinutes = playInFreeDays + playInWorkingDays;

    if (30000 > totalPlayMinutes) {
        let restMinutes = 30000 - totalPlayMinutes;
        let hours = Math.trunc(restMinutes / 60);
        let minutes = Math.trunc(restMinutes % 60);
        console.log(`Tom sleeps well`);
        console.log(`${hours} hours and ${minutes} minutes less for play`)
    } else {
        let restMinutes = totalPlayMinutes - 30000;
        let hours = Math.trunc(restMinutes / 60);
        let minutes = Math.trunc(restMinutes % 60);
        console.log(`Tom will run away`);
        console.log(`${hours} hours and ${minutes} more for play`)
    }
}
sleepyTomCat(["113"])