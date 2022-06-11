function hospital(input) {
    let index = 0;
    let period = Number(input[index]);
    index++;
    let countOfDoctors = 7; 
    let treatedPatients = 0; 
    let untreatedPatients = 0; 

    for (let i = 1; i <= period; i++) {
        let patients = Number(input[index]);
        index++

        if ((i % 3 === 0) && (untreatedPatients > treatedPatients)) {
            countOfDoctors++;
        } 
        if (patients < countOfDoctors) {
            treatedPatients += patients
        } else {
            untreatedPatients += patients - countOfDoctors;
            treatedPatients += countOfDoctors;
        }
    }
    console.log(`Treated patients: ${treatedPatients}.`); 
    console.log(`Untreated patients: ${untreatedPatients}.`); 
}
hospital(["6", "25", "25", "25", "25", "25", "2"]);
