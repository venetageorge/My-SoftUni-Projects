function radioCrystals(arr) {
    let wishedWidth = Number(arr[0]);

    for (let i = 1; i < arr.length; i++) {
        let commonWidthInMicrons = arr[i];

        let cutCounter = 0;
        let lapCounter = 0;
        let grindCounter = 0;
        let etchCounter = 0;
        let xRCounter = 0;

        let cut = (commonWidthInMicrons) => commonWidthInMicrons / 4;
        let lap = (commonWidthInMicrons) => commonWidthInMicrons * 0.80;
        let grind = (commonWidthInMicrons) => commonWidthInMicrons - 20;
        let etch = (commonWidthInMicrons) => commonWidthInMicrons - 2;
        let xRay = (commonWidthInMicrons) => commonWidthInMicrons + 1;

        while (commonWidthInMicrons !== wishedWidth) {
            console.log(`Processing chunk ${commonWidthInMicrons} microns`);

            while (commonWidthInMicrons / 4 >= wishedWidth) {
                commonWidthInMicrons = cut(commonWidthInMicrons);
                cutCounter++;
            }
            if (cutCounter !== 0) {
                commonWidthInMicrons = Math.floor(commonWidthInMicrons);
                console.log(`Cut x${cutCounter}\nTransporting and washing`)
            }

            while (commonWidthInMicrons * 0.8 >= wishedWidth) {
                commonWidthInMicrons = lap(commonWidthInMicrons);
                lapCounter++;
            }
            if (lapCounter !== 0) {
                console.log(`Lap x${lapCounter}\nTransporting and washing`);
                commonWidthInMicrons = Math.floor(commonWidthInMicrons);
            }
            while (commonWidthInMicrons - 20 >= wishedWidth) {
                commonWidthInMicrons = grind(commonWidthInMicrons);
                grindCounter++;
            }
            if (grindCounter !== 0) {
                console.log(`Grind x${grindCounter}\nTransporting and washing`)
                commonWidthInMicrons = Math.floor(commonWidthInMicrons);
            }
            while (commonWidthInMicrons > wishedWidth) {
                commonWidthInMicrons = etch(commonWidthInMicrons);
                etchCounter++;
            }
            if (etchCounter !== 0) {
                console.log(`Etch x${etchCounter}\nTransporting and washing`)
                commonWidthInMicrons = Math.floor(commonWidthInMicrons);
            }

            if (commonWidthInMicrons < wishedWidth) {
                commonWidthInMicrons = xRay(commonWidthInMicrons);
                xRCounter++;
            }
            if (xRCounter !== 0) {
                console.log(`X-ray x${xRCounter}`)
                commonWidthInMicrons = Math.floor(commonWidthInMicrons);
            }
            if (commonWidthInMicrons == wishedWidth) {
                console.log(`Finished crystal ${commonWidthInMicrons} microns`);
            }
        }
    }
}
radioCrystals([1375, 50000]);
// radioCrystals([1000, 4000, 8100]);