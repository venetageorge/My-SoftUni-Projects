function loadingBar(num) {
    let compleate = '%'.repeat(num/10);

    let incompleate = '.'.repeat(10 - compleate.length);

    if (incompleate.length === 0) {
        console.log(`${num}% Complete!`);
        console.log(`[${compleate}]`);
        
    } else {
        console.log(`${num}% [${compleate}${incompleate}]`);
        console.log("Still loading...");
    }
}
loadingBar(30);
loadingBar(50);
loadingBar(100);