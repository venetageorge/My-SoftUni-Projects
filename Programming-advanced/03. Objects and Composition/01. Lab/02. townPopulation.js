function townPopulation(arr) {
    let myObj = {};

    for (let i = 0; i < arr.length; i++) {
        let [townName, population] = arr[i].split(' <-> ');
        
        if (!myObj[townName]) {
            myObj[townName] = { population: Number(population)};
        } else {
            myObj[townName].population += Number(population);
        }

    }
    for (let element in myObj) {
    console.log(`${element} : ${myObj[element]['population']}`)
    }
}
townPopulation(['Sofia <-> 1200000',
'Montana <-> 20000',
'New York <-> 10000000',
'Washington <-> 2345000',
'Las Vegas <-> 1000000']);
townPopulation(['Istanbul <-> 100000',
'Honk Kong <-> 2100004',
'Jerusalem <-> 2352344',
'Mexico City <-> 23401925',
'Istanbul <-> 1000']);