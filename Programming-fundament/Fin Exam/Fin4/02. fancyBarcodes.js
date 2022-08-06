function fancyBarcodes(input) {
    let count = Number(input.shift());
    let pattern = /(@#{1,})([A-Z][A-Za-z0-9]{4,}[A-Z])(@#{1,})/g;
    
    for (let i = 0; i < count; i++) {
        let barcode = input[i];
        let match = pattern.exec(barcode);
        let concatDigit = '';
        let isValid = false; 

        while (match !== null) {
            isValid = true; 
            let barcodeText = match[2];
            for (let ch of barcodeText) {
                if (!isNaN(Number(ch))) {
                    concatDigit += ch;
                }
            }
            match = pattern.exec(barcode);
        }
        if (isValid) {
            concatDigit = concatDigit !== "" ? concatDigit : "00";
            console.log(`Product group: ${concatDigit}`);
        } else {
            console.log("Invalid barcode");
        }
    }
}
fancyBarcodes(["3",
    "@#FreshFisH@#",
    "@###Brea0D@###",
    "@##Che4s6E@##"]);
fancyBarcodes(["6",
"@###Val1d1teM@###",
"@#ValidIteM@#",
"##InvaliDiteM##",
"@InvalidIteM@",
"@#Invalid_IteM@#",
"@#ValiditeM@#"]);