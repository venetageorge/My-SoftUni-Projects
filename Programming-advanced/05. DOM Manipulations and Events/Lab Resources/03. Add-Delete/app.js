function addItem() {
    let items = document.querySelector('#items');
	let input = document.getElementById('newItemText');
	let myNewLi = createElement('li', input.value);
	let newA = createElement('a', '[Delete]');
	newA.href = '#';

	items.appendChild(myNewLi);
	myNewLi.appendChild(newA);
	items.addEventListener('click', onClick);

	function onClick(ev) {
		if ((ev.target.tagName = 'a')) {
			let liItem = ev.target.parentNode;
			items.removeChild(liItem);
			input.value = '';
		}
	}

	function createElement(element, content) {
		let newElement = document.createElement(element);
		newElement.textContent = content;
		return newElement;
	}
}