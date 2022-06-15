function numberModification(input) {
    let num = String(input);
    let avg = 0;
    let sum = 0;
    
    for(let i = 0; i < num.length; i++){
        sum += Number(num[i]);
    }
 
    avg = sum/num.length;
 
    while(avg <= 5){
        num += `9`;
        sum += 9;
        avg = sum / num.length;
    }
    console.log(num)
}
numberModification(101);
numberModification(5835);
