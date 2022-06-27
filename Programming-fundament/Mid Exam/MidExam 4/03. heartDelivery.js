function heartDelivery(arr) {
    let neighborhood = arr.shift().split("@");
    let command = arr.shift();
    let numHeartNeed = 0;

    while (command !== 'Love!') {
        let basis = command.split(' ');
        numHeartNeed += Number(basis[1]);

        if (numHeartNeed > neighborhood.length - 1) {
            numHeartNeed = 0;
        }
        if (neighborhood[numHeartNeed] === 0) {
            console.log(`Place ${numHeartNeed} already had Valentine's day.`);
        } else {
            neighborhood[numHeartNeed] = neighborhood[numHeartNeed] - 2;
            if (neighborhood[numHeartNeed] === 0) {
                console.log(`Place ${numHeartNeed} has Valentine's day.`);
            }
        }
        command = arr.shift();
    }
    console.log(`Cupid's last position was ${numHeartNeed}.`);
    let resArr = [];
    let resFlag = true;

    neighborhood.forEach(element => {
        if (element !== 0) {
            resFlag = false;
            resArr.push(element);
        }
    });
    if (resFlag) {
        console.log(`Mission was successful.`);
    } else {
        console.log(`Cupid has failed ${resArr.length} places.`);
    }
}
heartDelivery(["10@10@10@2",
    "Jump 1",
    "Jump 2",
    "Love!"]);
heartDelivery(["2@4@2",
    "Jump 2",
    "Jump 2",
    "Jump 8",
    "Jump 3",
    "Jump 1",
    "Love!"]);