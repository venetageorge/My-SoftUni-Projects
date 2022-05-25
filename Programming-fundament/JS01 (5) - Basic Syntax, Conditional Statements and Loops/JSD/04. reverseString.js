function reverseString(str) {
    let text = '';
    text = str.split('').reverse().join('');
    console.log(text);
}
reverseString("Hello");
reverseString("SoftUni");
reverseString("1234");