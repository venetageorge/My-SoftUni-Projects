function encodeAndDecodeMessages() {
    let buttons = document.querySelectorAll('button');
    buttons[0].addEventListener('click', encode);
    buttons[1].addEventListener('click', decode);

    function encode(e) {
        let newMsg = '';
        let currentText = e.target.parentElement.children[1].value; 

        for (let i = 0; i < currentText.length; i++) {
            let currentChar = currentText[i].charCodeAt();
            newMsg += String.fromCharCode(currentChar + 1); 
        }
        let textAreas = document.querySelectorAll('textarea');
        let resultTextArea = textAreas[1];
        resultTextArea.value = newMsg;
        let currentTextArea = textAreas[0];
        currentTextArea.value = '';
    }

    function decode(e) {
        let currentArea = e.target.parentElement.children[1]; 
        let currentTextt = currentArea.value; 
        let resMsg = '';
        for (let i = 0; i < currentTextt.length; i++) {
            let ch = currentTextt[i].charCodeAt();
            resMsg += String.fromCharCode(ch - 1); 
        }

        currentArea.value = resMsg;
    }
}