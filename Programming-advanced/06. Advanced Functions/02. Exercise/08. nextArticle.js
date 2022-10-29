function getArticleGenerator(articles) {
    let myArt = Array.from(articles);
    let content = document.getElementById('content');

    return () => {

        if (!myArt.length) {
            return 
        }
        let currentArt = myArt.shift();
        content.innerHTML += `<article>${currentArt}</article>`
    }
}
