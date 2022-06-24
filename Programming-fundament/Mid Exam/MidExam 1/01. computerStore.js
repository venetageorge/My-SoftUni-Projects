function computerStore(arr) {
    let pricesWithoutTax = arr[0];
    let tax = 0;
    isFailed = false;
    let sum = 0;
    
    for (let i = 0; i < arr.length; i++) {
        pricesWithoutTax = arr[i]; 

        if ((arr[i] == "special" || arr[i] == "regular") && sum > 0) {
            tax = 0.2 * sum;
            if (arr[i] == "special") {
                console.log(`Congratulations you've just bought a new computer!`)
                console.log(`Price without taxes: ${sum.toFixed(2)}$`);
                sum -= (0.1 * (tax + sum));
                break;
            } else if (arr[i] == "regular") {
                console.log(`Congratulations you've just bought a new computer!`)
                console.log(`Price without taxes: ${sum.toFixed(2)}$`);
                break;
            } 
        } else if ((arr[i] == "special" || arr[i] == "regular") && sum <= 0) {
            isFailed = true;
            break;
        } else if (pricesWithoutTax < 0) {
            console.log("Invalid price!");
        } else {
            pricesWithoutTax = Number(arr[i]); 
            sum += pricesWithoutTax;
        }
    }
        let total = sum + tax;
        if (total === 0) {
            console.log("Invalid order!");
        } else if (total > 0) {
        console.log(`Taxes: ${tax.toFixed(2)}$`);
        console.log("-----------")
        console.log(`Total price: ${total.toFixed(2)}$`);
        }
}
computerStore(['1050', '200', '450', '2', '18.50', '16.86', 'special']);
computerStore(['1023', '15', '-20', '-5.50', '450', '20', '17.66', '19.30', 'regular']);
computerStore(['regular']);