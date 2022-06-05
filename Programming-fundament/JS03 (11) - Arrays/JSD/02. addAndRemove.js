function addAndRemove(arr) {
    let num = 1;
    let newArr = [];
     
        for (let element of arr) {
            if (element === "add") {
                newArr.push(num);
            } else {
                newArr.pop();
            }
            num++;
        }

    if (newArr.length === 0) {
        console.log("Empty");
    } else {
        console.log(newArr.join(' '));
    }
}
addAndRemove(['add', 'add', 'add', 'add']);
addAndRemove(['add', 'add', 'remove', 'add', 'add']);
addAndRemove(['remove', 'remove', 'remove']);