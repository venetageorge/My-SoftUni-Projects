function constructorCrew(input) {
    if (input.dizziness === true) {
        input.levelOfHydrated += Number(input.levelOfHydrated * 0.1 * input.weight);
        input.dizziness = false; 
    }
    return input
}
console.log(constructorCrew({ weight: 80,
    experience: 1,
    levelOfHydrated: 0,
    dizziness: true }));
console.log(constructorCrew({ weight: 120,
    experience: 20,
    levelOfHydrated: 200,
    dizziness: true }));
console.log(constructorCrew({ weight: 95,
    experience: 3,
    levelOfHydrated: 0,
    dizziness: false }));