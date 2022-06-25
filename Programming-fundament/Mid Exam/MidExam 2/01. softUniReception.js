function softUniReception(input) {
    let mappedInput = input.map(Number);
    let sum = mappedInput[mappedInput.length - 1];
    let studentsForOneHour = 0;
    let time = 0;

    for (let i = 0; i < input.length - 1; i++) {
        let element = mappedInput[i];
        studentsForOneHour += element;
    }

    while (sum > 0) {
        sum -= studentsForOneHour;
        time++;
        if (time % 4 === 0) {
            time++;
        }
    }
    console.log(`Time needed: ${time}h.`);
}
softUniReception(['5','6','4','20']);
// softUniReception(['1','2','3','45']);
// softUniReception(['3','2','5','40']);