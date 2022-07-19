function passwordGenerator(arr) {
    let firstArr = arr.shift();
    let secondArr = arr.shift();
    let str = firstArr.concat(secondArr);
    let word = arr.shift().toUpperCase();
    let asciiSym = ['a', 'o', 'i' , 'u', 'e'];
    let index = 0;

    for (let i = 0; i < str.length; i++) {
        let commonLetter= str[i];
        
        for (let el of asciiSym) {
            if (el === commonLetter) {
                str = str.replace(commonLetter, word[index]);               
                if (index == word.length - 1) {
                    index = 0
                } else {
                    index++
                }
            } 
        }
    }
	let pass = str.split('').reverse().join('');
	console.log(`Your generated password is ${pass}`);
}
passwordGenerator(['ilovepizza', 'ihatevegetables', 'orange']);
// passwordGenerator(['easymoneyeazylife', 'atleasttencharacters', 'absolute']);
// passwordGenerator(['areyousureaboutthisone', 'notquitebutitrustyou', 'disturbed']);