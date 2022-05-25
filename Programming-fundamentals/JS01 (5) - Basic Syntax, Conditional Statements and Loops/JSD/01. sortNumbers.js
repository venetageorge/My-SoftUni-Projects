function sortNumbers(n1, n2, n3) {
    let min = Number.MAX_SAFE_INTEGER;
    let max = Number.MIN_SAFE_INTEGER;
    biggest = '';
    smallest = '';
    middle = '';

    if (n1 >= max && n1 >= n2 && n1 >= n3) {
        max = n1;
        biggest = max;
        if (n2 <= min && n2 <= n1 && n2 <= n3) {
            min = n2;
            smallest = n2;
            middle = n3; 
        }
        if (n3 <= min && n3 <= n2 && n3 <= n1) {
            min = n3;
            smallest = n3;
            middle = n2; 
        }
    } else if (n2 >= max && n2 >= n1 && n2 >= n3) {
        max = n2;
        biggest = max;
        if (n3 <= min && n3 <= n2 && n3 <= n1) {
            min = n3;
            smallest = n3;
            middle = n1; 
        }
        if (n1 <= min && n1 <= n2 && n1 <= n3) {
            min = n1;
            smallest = n1;
            middle = n3; 
        }
    } else if (n3 >= max && n3 >= n1 && n3 >= n2) {
        max = n3;
        biggest = max;
        if (n2 <= min && n2 <= n1 && n2 <= n3) {
            min = n2;
            smallest = n2;
            middle = n1; 
        }
        if (n1 <= min && n1 <= n2 && n1 <= n3) {
            min = n1;
            smallest = n1;
            middle = n2; 
        }
    } 
    console.log(`${biggest}\n${middle}\n${smallest}`);
}
sortNumbers(2, 1, 3);
sortNumbers(-2, 1, 3);
sortNumbers(0, 0, 2);
sortNumbers(3, 3, 1);