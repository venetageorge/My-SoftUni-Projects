function coins(input) {
    let money = input[0];
    let convertedMoney = parseInt(money * 100); 
    let coins = 0; 

    while (convertedMoney > 0) {
        if (convertedMoney - 200 >= 0) {
            coins++;
            convertedMoney -= 200; 
        } else if (convertedMoney - 100 >= 0) {
            coins++;
            convertedMoney -= 100; 
        } else if (convertedMoney - 50 >= 0) {
            coins++;
            convertedMoney -= 50; 
        } else if (convertedMoney - 20 >= 0) {
            coins++;
            convertedMoney -= 20; 
        } else if (convertedMoney - 10 >= 0) {
            coins++;
            convertedMoney -= 10; 
        } else if (convertedMoney - 5 >= 0) {
            coins++;
            convertedMoney -= 5; 
        } else if (convertedMoney - 2 >= 0) {
            coins++;
            convertedMoney -= 2; 
        } else if (convertedMoney - 1 >= 0) {
            coins++;
            convertedMoney -= 1; 
        }
    }
    console.log(coins);
}
coins(["0.56"]);