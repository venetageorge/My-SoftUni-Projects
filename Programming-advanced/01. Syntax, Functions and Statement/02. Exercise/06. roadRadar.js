function roadRadar(currentSpeed, araa) {
    let motorwayLimit = 130;
    let interstateLimit = 90;
    let cityLimit = 50;
    let residentialLimit = 20;
    let diff = 0;
    let status = ''; 
    currentSpeed = Number(currentSpeed);

    switch (araa) {
        case 'motorway':
        if (currentSpeed <= motorwayLimit) {
            console.log(`Driving ${currentSpeed} km/h in a ${motorwayLimit} zone`);
        } else {
            diff = currentSpeed - motorwayLimit;
            if (diff <= 20) {
                status = 'speeding';
            } else if (diff > 20 && diff <= 40) {
                status = 'excessive speeding';
            } else {
                status = 'reckless driving';
            }
            console.log(`The speed is ${diff} km/h faster than the allowed speed of ${motorwayLimit} - ${status}`);
        }
        break;
        case 'interstate':
            if (currentSpeed <= interstateLimit) {
                console.log(`Driving ${currentSpeed} km/h in a ${interstateLimit} zone`);
            } else {
                diff = currentSpeed - interstateLimit;
                if (diff <= 20) {
                    status = 'speeding';
                } else if (diff > 20 && diff <= 40) {
                    status = 'excessive speeding';
                } else {
                    status = 'reckless driving';
                }
                console.log(`The speed is ${diff} km/h faster than the allowed speed of ${interstateLimit} - ${status}`);
            }
        break;
        case 'residential':
            if (currentSpeed <= residentialLimit) {
                console.log(`Driving ${currentSpeed} km/h in a ${residentialLimit} zone`);
            } else {
                diff = currentSpeed - residentialLimit;
                if (diff <= 20) {
                    status = 'speeding';
                } else if (diff > 20 && diff <= 40) {
                    status = 'excessive speeding';
                } else {
                    status = 'reckless driving';
                }
                console.log(`The speed is ${diff} km/h faster than the allowed speed of ${residentialLimit} - ${status}`);
            }
        break;
        case 'city':
            if (currentSpeed <= cityLimit) {
                console.log(`Driving ${currentSpeed} km/h in a ${cityLimit} zone`);
            } else {
                diff = currentSpeed - cityLimit;
                if (diff <= 20) {
                    status = 'speeding';
                } else if (diff > 20 && diff <= 40) {
                    status = 'excessive speeding';
                } else {
                    status = 'reckless driving';
                }
                console.log(`The speed is ${diff} km/h faster than the allowed speed of ${cityLimit} - ${status}`);
            }
        break;
    }
}
roadRadar(40, 'city');
roadRadar(21, 'residential');
roadRadar(120, 'interstate');
roadRadar(200, 'motorway');