function pascalCaseSplitter(str) {
    let res = str[0];
    
    for (let i = 1; i < str.length; i++) {
        let commonElemnt = str[i];
        let big = str[i].toUpperCase();

        if (commonElemnt !== big) {
            res += commonElemnt;
        } else {
            res += `, ${commonElemnt}`;
        }
    }
    console.log(res);
}
pascalCaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan');
pascalCaseSplitter('HoldTheDoor');
pascalCaseSplitter('ThisIsSoAnnoyingToDo');