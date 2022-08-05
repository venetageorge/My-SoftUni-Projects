function plantDiscovery(input) {
    let number = Number(input.shift());
    let myObj = {};

    for (let i = 0; i < number; i++) {
        let [plant, rarity] = input[i].split('<->');
        rarity = Number(rarity);
        myObj[plant] = {
            rarity,
            rating: []
        };
    }

    for (let i = number; i < input.length; i++) {
        let command  = input[i].split(': ');

        if (command === 'Exhibition') {
            break;
        }

        if (command[0] === 'Rate') {
            command = command[1].split(' - ');
            let plantName = command[0];
            let plantRating = Number(command[1]);
                if (!myObj[plantName]) {
                    console.log(`error`);
                } else {
                    myObj[plantName].rating.push(plantRating);
                }
        } else if (command[0] === 'Update') {
            command = command[1].split(' - ');
            let plantName = command[0];
            let newRarity = Number(command[1]);
            if (!myObj[plantName]) {
                console.log(`error`);
            } else {
                myObj[plantName].rarity = newRarity;
            }
        } else if (command[0] === 'Reset') {
            let plantNeme = command[1];
            if (!myObj[plantNeme]) {
                console.log(`error`);
            } else {
                myObj[plantNeme].rating = [];
            }
        }
    }
    console.log(`Plants for the exhibition:`);
    for (let plant of Object.keys(myObj)) {
        console.log(`- ${plant}; Rarity: ${myObj[plant].rarity}; Rating: ${avg(myObj[plant].rating).toFixed(2)}`);
    }

    function avg(arr) {
        if (!arr.length) return 0;
        return arr.reduce((a, b) => a + b, 0) / arr.length;
    }
}
plantDiscovery(["3",
"Arnoldii<->4",
"Woodii<->7",
"Welwitschia<->2",
"Rate: Woodii - 10",
"Rate: Welwitschia - 7",
"Rate: Arnoldii - 3",
"Rate: Woodii - 5",
"Update: Woodii - 5",
"Reset: Arnoldii",
"Exhibition"]);
// plantDiscovery(["2",
// "Candelabra<->10",
// "Oahu<->10",
// "Rate: Oahu - 7",
// "Rate: Candelabra - 6",
// "Exhibition"]);