function login(input) {
    let index = 0;
    let userName = input[index];
    index++;
    let pass = userName.split('').reverse().join('');
    let counter = 0;
    let currentInput = input[index];

    while (currentInput !== pass) {
        counter++;
        if (counter === 4) {
            console.log(`User ${userName} blocked!`);
            return;
        } else {
            console.log(`Incorrect password. Try again.`);
        }
        index++;
        currentInput = input[index];
    }
    if (input[index] === pass) {
        console.log(`User ${userName} logged in.`);
    }
}
login(['Acer','login','go','let me in','recA']);
// login(['momo','omom']);
// login(['sunny','rainy','cloudy','sunny','not sunny']);