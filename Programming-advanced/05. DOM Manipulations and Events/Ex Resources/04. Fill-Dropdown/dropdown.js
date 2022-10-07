function addItem() {
	let itemText = document.querySelector('#newItemText');
	let itemValue = document.querySelector('#newItemValue');

	let newOption = createElement('option', itemText.value, itemValue.value);

	document.querySelector('#menu').appendChild(newOption);

	itemText.value = '';
	itemValue.value = '';

	function createElement(type, content, value) {
		let element = document.createElement(type);
		element.textContent = content;
		element.value = value;
		return element;
	}
}