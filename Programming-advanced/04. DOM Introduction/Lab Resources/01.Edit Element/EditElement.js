function editElement(ref, match, replacer) {
    let text = ref.textContent; 
    text = text.split(match).join(replacer);
    ref.textContent = text;
}