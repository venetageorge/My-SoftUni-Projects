function townsToJson(arr) {
    arr.shift();
    let res = [];

    for (let el of arr) {
        let basis = el.split(' | ');
        let Town = basis[0].replace('| ', '');
		let Latitude = Number(basis[1]).toFixed(2);
		let Longitude = Number(basis[2].replace(' |', '')).toFixed(2);

		Latitude = Number(Latitude);
		Longitude = Number(Longitude);

		const obj = {
			Town: Town,
			Latitude: Latitude,
			Longitude: Longitude,
		};
		res.push(obj);
	}
	console.log(JSON.stringify(res));
}
townsToJson(['| Town | Latitude | Longitude |',
'| Sofia | 42.696552 | 23.32601 |',
'| Beijing | 39.913818 | 116.363625 |']);
townsToJson(['| Town | Latitude | Longitude |',
'| Veliko Turnovo | 43.0757 | 25.6172 |',
'| Monatevideo | 34.50 | 56.11 |']);