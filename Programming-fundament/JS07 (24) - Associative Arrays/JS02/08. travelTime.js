function travelTime(input) {
    let countries = new Map();

    input.forEach(element => {
        let [country, town, price] = element.split(' > ');
        price = Number(price);
        let towns;

        if (!countries.has(country)) {
            towns = new Map();
        } else {
            towns = countries.get(country);
        }

        if (!towns.has(town)) {
            towns.set(town, price);
        } else {
            let currentPrice = towns.get(town);
            if (price < currentPrice) {
                towns.set(town, price);
            }
        }

        countries.set(country, towns);
    });

    const sortedCountries = Array.from(countries.entries())
        .sort((a, b) => a[0].localeCompare(b[0]));

    for (const [country, cities] of sortedCountries) {
        let sortedCities = Array.from(cities.entries())
            .sort((a, b) => a[1] - b[1])
            .map(city => city.join(' -> '));

        console.log(`${country} -> ${sortedCities.join(' ')}`);
    }
}
travelTime([
    "Bulgaria > Sofia > 500",
    "Bulgaria > Sopot > 800",
    "France > Paris > 2000",
    "Albania > Tirana > 1000",
    "Bulgaria > Sofia > 200"
]);
// travelTime([
//     'Bulgaria > Sofia > 25000',
//     'Bulgaria > Sofia > 25000',
//     'Kalimdor > Orgrimar > 25000',
//     'Albania > Tirana > 25000',
//     'Bulgaria > Varna > 25010',
//     'Bulgaria > Lukovit > 10'
//     ]);