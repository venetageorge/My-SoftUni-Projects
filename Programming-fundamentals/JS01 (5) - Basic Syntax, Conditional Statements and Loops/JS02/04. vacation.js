function vacation(sum, type, day) {
    let price = 0;

    if (type === "Students") {
            switch (day) {
            case "Friday": price += sum * 8.45; break;
            case "Saturday": price += sum * 9.80; break;
            case "Sunday": price = +sum * 10.46; break;
            }
            if (sum >= 30) {
                price *= 0.85;
            }
    } else if (type === "Business") {
        if (sum >= 100) {
            switch (day) {
                case "Friday": price += (sum - 10) * 10.90; break;
                case "Saturday": price += (sum - 10) * 15.60; break;
                case "Sunday": price += (sum - 10) * 16; break;
            }
        } else {
            switch (day) {
                case "Friday": price += sum * 10.90; break;
                case "Saturday": price += sum * 15.60; break;
                case "Sunday": price += sum * 16; break;
            }
        }
    } else if (type === "Regular") {
        switch (day) {
            case "Friday": price += sum * 15; break;
            case "Saturday": price += sum * 20; break;
            case "Sunday": price += sum * 22.50; break;
        }
        if (sum >= 10 && sum <= 20) {
            price *= 0.95;
        }
    }
    console.log(`Total price: ${price.toFixed(2)}`);
}
vacation(30, "Students", "Sunday");
vacation(40, "Regular", "Saturday");