function convertToObject(jsonObj) {
    let person = JSON.parse(jsonObj);

    for (let key of Object.keys(person)) {
    console.log(`${key}: ${person[key]}`);
    }
}
convertToObject('{"name": "George", "age": 40, "town": "Sofia"}');
convertToObject('{"name": "Peter", "age": 35, "town": "Plovdiv"}');