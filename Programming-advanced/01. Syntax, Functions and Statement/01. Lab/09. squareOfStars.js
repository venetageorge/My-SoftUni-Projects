function squareOfStars(num) {
    let res = "*".repeat(num).split("").join(" ");
    while (num > 0) {
        console.log(res);
        num--;
    }
}
squareOfStars(1);
squareOfStars(2);
squareOfStars(5);
squareOfStars(7);