function timeToTravel(steps, footprintLength, speed) {
    let metersToWalk = steps * footprintLength;
    let speedsSec = speed / 3.6;
    let time = metersToWalk / speedsSec;
    let res = Math.floor(metersToWalk / 500);
    let timeInMin = Math.floor(time / 60);
    let timeInSec = (time - (timeInMin * 60)).toFixed(0);
    let timeInHours = Math.floor(time / 3600);
    timeInMin += res;
    timeInHours += Math.floor(timeInMin / 60);
    timeInMin = timeInMin % 60; 
    let formattedH = timeInHours < 10 ? `0${timeInHours}` : `${timeInHours}`;
    let formattedM = timeInMin < 10 ? `0${timeInMin}` : `${timeInMin}`;
    let formattedS = timeInSec < 10 ? `0${timeInSec}` : `${timeInSec}`;
    console.log(`${formattedH}:${formattedM}:${formattedS}`);
}
timeToTravel(4000, 0.60, 5);
timeToTravel(2564, 0.70, 5.5);