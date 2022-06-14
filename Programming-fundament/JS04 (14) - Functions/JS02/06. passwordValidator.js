function passwordValidator(pass) {
    
    function isLengthEnough (stringPass) {
        return stringPass.length >= 6 && stringPass.length <= 10
    }

    function isOnlyLettersAndDigits (stringPass) {
        for (let currentCharIndex of stringPass) {
            let currentChar = currentCharIndex.charCodeAt(0);

            if (
                !(currentChar >= 65 && currentChar <= 97) &&
                !(currentChar >= 97 && currentChar <= 122) && 
                !(currentChar >= 48 && currentChar <= 57))
            {
                return false;
            }
        }
        return true; 
    }
    function isHavingSmallDigits(stringPass) {
        let count = 0;

        for (let charIndex of stringPass) {
            let currChar = charIndex.charCodeAt(0);

            if (currChar >= 48 && currChar <= 57) {
                count++;
            }
        }
        return count >= 2 ? true : false;
    }


    let isLength = isLengthEnough(pass);
    let isOnlyLettersAndDig = isOnlyLettersAndDigits(pass);
    let isHavingSmall = isHavingSmallDigits(pass);

    if (isLength && isOnlyLettersAndDig && isHavingSmall) {
        console.log("Password is valid");
    }

    if (!isLength) {
        console.log("Password must be between 6 and 10 characters");
    }

    if (!isOnlyLettersAndDig) {
        console.log("Password must consist only of letters and digits");
    }
    if (!isHavingSmall) {
        console.log("Password must have at least 2 digits");
    }
}
passwordValidator('logIn');
passwordValidator('MyPass123');
passwordValidator('Pa$s$s');