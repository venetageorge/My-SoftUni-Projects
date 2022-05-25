function pipesInPool(input) {
    const poolVolumeInLitters = Number(input[0]);
    const firstPipeDebitForOneHour = Number(input[1]);
    const secondPipeDebitForOneHour = Number(input[2]); 
    const hoursWorkerNotThere = Number(input[3]); 
    
    let firstPipe = hoursWorkerNotThere * firstPipeDebitForOneHour;
    let secondPipe = hoursWorkerNotThere * secondPipeDebitForOneHour;
    let totalPipe = firstPipe + secondPipe;

    if (totalPipe < poolVolumeInLitters) {
        const percent = (totalPipe / poolVolumeInLitters) * 100;
        firstPipePercent = (firstPipe / totalPipe) * 100;
        secondPipePercent = (secondPipe / totalPipe) * 100;
        console.log(`The pool is ${percent.toFixed(2)}% full. Pipe 1: ${firstPipePercent.toFixed(2)}%. Pipe 2: ${secondPipePercent.toFixed(2)}%.`);
    } else {
        let overflow = totalPipe - poolVolumeInLitters;
        console.log(`For ${hoursWorkerNotThere.toFixed(2)} hours the pool overflows with ${overflow.toFixed(2)} liters.`);
    }
}
pipesInPool(["100", "100", "100", "2.5"]);