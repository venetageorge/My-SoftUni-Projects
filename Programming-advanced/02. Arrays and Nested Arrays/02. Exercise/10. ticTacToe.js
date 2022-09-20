function ticaTacToe(input) {
    let initDashBoard = [
        [false, false, false],
        [false, false, false],
        [false, false, false]
    ];
    let isFirstPlayer = true;

    for (let coordinates of input) {
        let [x, y] = coordinates.split(' ');

        if (initDashBoard[x][y]) {
            console.log(`This place is already taken. Please choose another!`);
            continue;
        }
        let marker = isFirstPlayer ? 'X' : 'O';
        initDashBoard[x][y] = marker;
        if (checkWin(initDashBoard, marker)) {
            console.log(`Player ${marker} wins!`);
            printTable(initDashBoard)
            return
        }


        if (!checkFreeSpace(initDashBoard)) {
            console.log(`The game ended! Nobody wins :(`);
            printTable(initDashBoard)
            return
        }
        isFirstPlayer = !isFirstPlayer;
    }

    function checkFreeSpace() {
        for (let row = 0; row < initDashBoard.length; row++) {
            for (let col = 0; col < initDashBoard[row].length; col++) {
                if (initDashBoard[row][col]) {
                    return true;
                }
            }
        }
        return false
    }
    function printTable(initDashBoard) {
        initDashBoard.forEach(row => console.log(row.join('\t')));
    }

    function checkWin(initDashBoard, marker) {
        for (let i = 0; i < initDashBoard.length; i++) {

            if (initDashBoard[i][0] === marker &&
                initDashBoard[i][1] === marker &&
                initDashBoard[i][2] === marker) {
                return true
            } else if (initDashBoard[0][i] === marker &&
                initDashBoard[1][i] === marker &&
                initDashBoard[2][i] === marker) {
                return true
            } else if (initDashBoard[0][0] === marker &&
                initDashBoard[1][1] === marker &&
                initDashBoard[2][2] === marker) {
                return true
            } else if (initDashBoard[0][2] === marker &&
                initDashBoard[1][1] === marker &&
                initDashBoard[2][0] === marker) {
                return true
            }
        }
        return false
    }
}
ticaTacToe(["0 1",
    "0 0",
    "0 2",
    "2 0",
    "1 0",
    "1 1",
    "1 2",
    "2 2",
    "2 1",
    "0 0"]);
// ticaTacToe(["0 0",
// "0 0",
// "1 1",
// "0 1",
// "1 2",
// "0 2",
// "2 2",
// "1 2",
// "2 2",
// "2 1"]);
// ticaTacToe(["0 1",
// "0 0",
// "0 2",
// "2 0",
// "1 0",
// "1 2",
// "1 1",
// "2 1",
// "2 2",
// "0 0"]);