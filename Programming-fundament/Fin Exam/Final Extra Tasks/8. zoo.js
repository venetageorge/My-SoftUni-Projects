function zoo(input) {
    let myObj = {};
    let areaObj = {};

    while (input[0] != 'EndDay') {
        let basis = input.shift().split(': ');
        let command = basis[0];
        let token = basis[1].split('-');
        let animalName = token[0];

        switch (command) {
            case 'Add':
                let neededFoodQuantity = Number(token[1]);
                let area = token[2];
                
                if (myObj.hasOwnProperty(animalName)) {
                    myObj[animalName]['neededFoodQuantity'] += Number(token[1]);
                } else {
                myObj[animalName] = {};
                myObj[animalName]['neededFoodQuantity'] = neededFoodQuantity;
                myObj[animalName]['area'] = area;
                if(!areaObj.hasOwnProperty(area)) {
                    areaObj[area] = 1;
                } else {
                    areaObj[area]++;
                }
            }            
            break;
            case 'Feed':
                let food = Number(token[1]);

                if (myObj.hasOwnProperty(animalName)) {
                    myObj[animalName]['neededFoodQuantity'] -= food;
                    if (myObj[animalName]['neededFoodQuantity'] <= 0) {
                        let currArea = myObj[animalName].area;
                        areaObj[currArea]--;
                        if(areaObj[currArea] <= 0) {
                            delete areaObj[currArea];
                        }
                        delete myObj[animalName];
                        console.log(`${animalName} was successfully fed`);
                    }
                } 
            break;
        }
    }
    if(Object.entries(myObj).length > 0) {
    console.log(`Animals:`);
    for (let key in myObj) {
    console.log(` ${key} -> ${myObj[key]['neededFoodQuantity']}g`);
    }
}

    if(Object.entries(areaObj).length > 0) {
    console.log(`Areas with hungry animals:`);
    for (let [key, value] of Object.entries(areaObj)) {
        console.log(` ${key}: ${value}`);
    }
    }

}
zoo(['Add: Adam-4500-ByTheCreek',
'Add: Maya-7600-WaterfallArea',
'Add: Maya-1230-WaterfallArea',
'Feed: Jamie-2000',
'EndDay']);
zoo(['Add: Jamie-600-WaterfallArea',
'Add: Maya-6570-WaterfallArea',
'Add: Adam-4500-ByTheCreek',
'Add: Bibbie-6570-WaterfallArea',
'Feed: Jamie-2000',
'Feed: Adam-2000',
'Feed: Adam-2500',
'EndDay']);