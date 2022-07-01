function convertToJSON(name, lastName, hairColor) {
    let result = {
        name,
        lastName,
        hairColor
    }
    let resAsString = JSON.stringify(result);
    console.log(resAsString);
}
convertToJSON('George', 'Jones', 'Brown');
convertToJSON('Peter', 'Smith', 'Blond');