function movieRatings(input) {
    const numberFilms = Number(input[0]);
    let index = 1;
    let maxNumber = Number.MIN_SAFE_INTEGER;
    let minNumber = Number.MAX_SAFE_INTEGER;
    let maxmovieName = "";
    let minmovieName = "";
    let avgRating = 0;
    
    for (let i = 1; i <= numberFilms; i++) {
        let movie = input[index];
        index++;
        let rating = Number(input[index]);
        index++;
        avgRating += rating;
        
        if (rating > maxNumber) {
            maxNumber = rating;
            maxmovieName = movie;
        } 
        if (rating < minNumber) {
            minNumber = rating;
            minmovieName = movie;
        }
    }
    let total = avgRating / numberFilms;
console.log(`${maxmovieName} is with highest rating: ${maxNumber.toFixed(1)}`);
console.log(`${minmovieName} is with lowest rating: ${minNumber.toFixed(1)}`);
console.log(`Average rating: ${total.toFixed(1)}`);
}
movieRatings(["5",
"A Star is Born",
"7.8",
"Creed 2",
"7.3",
"Mary Poppins",
"7.2",
"Vice",
"7.2",
"Captain Marvel",
"7.1"])
