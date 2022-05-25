// function weddingSeats(input) {
//     let lastSector = input[0];
//     let rowsFirstSector = Number(input[1]);
//     let countSeatsOddRow = "" + Number(input[2]);
//     let counter = 0;
//     let startSeat = "a";
//     let endSeat = "z";
//     let res = "";

//     let aSec = "A";
//     for (let sector = aSec; sector <= lastSector; sector++) {
//         for (let rows = rowsFirstSector; rows <= 100; rows++) {
//             for (let seat = startSeat; seat <= endSeat; seat++) {
//                 if (sector === aSec) {
//                 rows += rowsFirstSector;  
//                 } else {
//                 rowsFirstSector++;
//                 rows += rowsFirstSector;
//                 }
//                 if (rowsFirstSector % 2 !== 0) {
//                 seat += countSeatsOddRow;
//                 counter += seat;
//                 } else {
//                 seat += countSeatsOddRow + 2;
//                 counter += seat;
//                 }
//                 res += `${sector}${rows}${seat}\n${counter}`;
//             }
//         }
//     }
// console.log(res);
// }
// weddingSeats(["B", "3", "2"]);