function guineaPig(arr) {
    let foodKg = Number(arr[0]);
    let hayKG = Number(arr[1]);
    let coverKg = Number(arr[2]);
    let pigWeight = Number(arr[3]);
    let month = 30;
    let day = 0;
    isFinish = false; 

    for (let i = 1; i <= month; i++) {
        
        if (foodKg - 0.3 <= 0) {
            isFinish = true;
            break;
        } else {
            foodKg -= 0.3;
        }
        
         if (i % 2 === 0) {
            hayKG -= 0.05 * foodKg;
        }
        if (i % 3 === 0) {
            coverKg -= pigWeight / 3;
        }  

        if (foodKg <= 0 || coverKg <= 0 || hayKG <= 0) {
            isFinish = true;
            break;
        } 
    }

    if (isFinish) {
        console.log(`Merry must go to the pet store!`);
    } else {
        console.log(`Everything is fine! Puppy is happy! Food: ${foodKg.toFixed(2)}, Hay: ${hayKG.toFixed(2)}, Cover: ${coverKg.toFixed(2)}.`);
    }
}
guineaPig(["10", 
"5", 
"5.2", 
"1"]); 
guineaPig(["1", 
"1.5", 
"3", 
"1.5"
]);
guineaPig(["9",
"5",
"5.2",
"1"]);