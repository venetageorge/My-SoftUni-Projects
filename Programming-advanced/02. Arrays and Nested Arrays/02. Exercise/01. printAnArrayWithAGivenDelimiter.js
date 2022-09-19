function printAnArrayWithAGivenDelimeter(arr, str) {
    let res = arr.join(str);
    console.log(res);
}
printAnArrayWithAGivenDelimeter(['One', 
'Two', 
'Three', 
'Four', 
'Five'], 
'-');
printAnArrayWithAGivenDelimeter(['How about no?', 
'I',
'will', 
'not', 
'do', 
'it!'], 
'_');