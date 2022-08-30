function biscuit(arr) {
 
    let numberOfBiscuitsPerDayPerWorker = Number(arr.shift());
    let numberOfWorkers = Number(arr.shift());
    let monthBiscuits = Number(arr.shift());
 
    let monthNew = (numberOfBiscuitsPerDayPerWorker * numberOfWorkers) * 30;
    let producedForDay = monthNew / 30;
    let totalProduced = 0
 
    for (let i = 1; i <= 30; i++) {
        totalProduced += producedForDay;
        if (i % 3 === 0) {
            totalProduced -= producedForDay;
            totalProduced += Math.floor(producedForDay * 0.75);
        }
    }
    console.log(`You have produced ${totalProduced} biscuits for the past month.`);
    if (totalProduced > monthBiscuits) {
        let defference = totalProduced - monthBiscuits; 
        let percent = (defference / monthBiscuits) * 100;
        console.log(`You produce ${percent.toFixed(2)} percent more biscuits.`);
    } else {
        let deff = monthBiscuits - totalProduced;
        let per = (deff / totalProduced) * 100;
        console.log(`You produce ${per.toFixed(2)} percent less biscuits.`);
    }
}
biscuit(["78",
    "8",
    "16000"]);
biscuit(["163",
    "16",
    "67020"]);