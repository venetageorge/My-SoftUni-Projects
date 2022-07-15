function extractFile(str) {
    let text = str.split('\\');
    let lastElement = text.pop();
    let lastPoint = lastElement.lastIndexOf('.');
    let extension = lastElement.substring(lastPoint + 1, lastElement.length);
    let name = lastElement.substring(0, lastPoint)
    
    console.log(`File name: ${name}\nFile extension: ${extension}`);
}
extractFile('C:\\Internal\\training-internal\\Template.pptx');
extractFile('C:\\Projects\\Data-Structures\\LinkedList.cs');