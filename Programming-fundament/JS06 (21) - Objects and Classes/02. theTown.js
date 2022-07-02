function towns(arr) {
    let myObj = {};

    for (let city of arr) {
        let [townName, townLatitude, townLongitude] = city.split(" | ");

        myObj.town = townName;
        myObj.latitude = (Number(townLatitude).toFixed(2));
        myObj.longitude = (Number(townLongitude).toFixed(2));
        
        console.log(myObj);
    }
}
towns(['Sofia | 42.696552 | 23.32601',
'Beijing | 39.913818 | 116.363625']);
towns(['Plovdiv | 136.45 | 812.575']);