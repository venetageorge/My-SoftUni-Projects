function cityRecords(...rest) {
    let myObj = {};
    myObj['name'] = rest[0];
    myObj['population'] = Number(rest[1]);
    myObj['treasury'] = Number(rest[2]);
    return myObj
}
console.log(cityRecords('Tortuga',
7000,
15000));

console.log(cityRecords('Santo Domingo',
12000,
23500));