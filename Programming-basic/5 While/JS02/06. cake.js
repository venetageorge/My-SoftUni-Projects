function cake(input) {
    let width = Number(input[0]);
    let length = Number(input[1]);
    let countOfSlice = width * length; 
    let index = 2;
    let command = input[index];
    index++;

    while (command !== "STOP") {
        let eatenSlice = Number(command);
        countOfSlice -= eatenSlice;

        if (countOfSlice <= 0) {
            console.log(`No more cake left! You need ${Math.abs(countOfSlice)} pieces more.`);
            break;
        }
        command = input[index];
        index++;
    }
    if (command === "STOP") {
        let leftSlice = countOfSlice;
        console.log(`${leftSlice} pieces are left.`);
    }
}
cake(["10", "2", "2", "4", "6", "STOP"]);