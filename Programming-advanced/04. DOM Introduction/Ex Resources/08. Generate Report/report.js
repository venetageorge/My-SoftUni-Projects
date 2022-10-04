function generateReport() {
    let checkedBoxIndexes = [];
    let checkedBoxes = Array.from(document.querySelectorAll('input'));
    checkedBoxes.forEach((el, index) => {
        if (el.checked) {
            checkedBoxIndexes.push(index);
        }
    });
    let output = [];
    let tableRows = Array.from(document.querySelectorAll('tbody tr'));

    for (let row of tableRows) {
        let infoObject = {};

        for (let index of checkedBoxIndexes) {
            let propertyName = checkedBoxes[index].name;
            let propertyData = row.children[index].textContent;
            infoObject[propertyName] = propertyData;
        }

        output.push(infoObject);

    }

    let outputElement = document.getElementById('output');

    outputElement.value = JSON.stringify(output);
}