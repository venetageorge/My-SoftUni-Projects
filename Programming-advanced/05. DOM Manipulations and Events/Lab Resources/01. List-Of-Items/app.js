function addItem() {

    let input = document.getElementById("newItemText");
    let added = input.value;

    let liItem = document.createElement('li');
    let place = document.getElementById('items')
    liItem.textContent = added;

    place.appendChild(liItem);
    input.value = '';
}