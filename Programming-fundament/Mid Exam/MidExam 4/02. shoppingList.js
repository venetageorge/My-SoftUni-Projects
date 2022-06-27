function shoppingList(arr) {
    let shopList = arr.shift().split("!");
    let index = 0;
    let command = arr[index];
    index++;

    while (command !== "Go Shopping!") {
        let basis = command.split(" ");
        let word = basis.shift();
        let first = basis[0];
        let i = shopList.indexOf(first);

        switch (word) {

            case "Urgent":
                if (i < 0) {
                    shopList.unshift(first);
                } 
            break;
            case "Unnecessary":
                if (shopList.includes(first)) {
                    shopList.splice(i, 1);
                } 
            break;
            case "Correct":
                let second = basis[1]
                if (shopList.includes(first)) {
                    shopList.splice(i, 1, second);
                } 
            break;
            case "Rearrange":
                if (shopList.includes(first)) {
                    shopList.splice(i, 1);
                    shopList.push(first);
                } 
            break;
        }
        command = arr[index];
        index++;

        if (command === "Go Shopping!") {
            break;
        }
    }
    console.log(`${shopList.join(", ")}`);
}
shoppingList(["Tomatoes!Potatoes!Bread",
"Unnecessary Milk",
"Urgent Tomatoes",
"Go Shopping!"]);
shoppingList(["Milk!Pepper!Salt!Water!Banana",
"Urgent Salt",
"Unnecessary Grapes",
"Correct Pepper Onion",
"Rearrange Grapes",
"Correct Tomatoes Potatoes",
"Go Shopping!"]);