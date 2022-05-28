function primeNumberChecker(num) {
    isPrime = false;
    if (num % 2 === 0 || num % 3 === 0 || num % 5 === 0) {
        isPrime;
    } else {
        isPrime = true; 
    }
    console.log(isPrime)
}
primeNumberChecker(7);
primeNumberChecker(8);
primeNumberChecker(81);