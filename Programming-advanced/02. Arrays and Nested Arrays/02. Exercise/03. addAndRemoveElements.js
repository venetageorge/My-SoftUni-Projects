function addAndRemoveElements(arr) {
    let myArr = [1];
    let num = 1;

    for (let i = 1; i < arr.length; i++) {
        num++;
        if (arr[i] == 'add') {
            myArr.push(num);
        } else {
            myArr.pop(arr[i - 1]);
        }
    }
    if (myArr.length >= 1) {
        console.log(myArr.join('\n'));
    } else {
        console.log('Empty');
    }
}
addAndRemoveElements(['add', 
'add', 
'add', 
'add']);
// addAndRemoveElements(['add', 
// 'add', 
// 'remove', 
// 'add', 
// 'add']);
// addAndRemoveElements(['remove', 
// 'remove', 
// 'remove']);