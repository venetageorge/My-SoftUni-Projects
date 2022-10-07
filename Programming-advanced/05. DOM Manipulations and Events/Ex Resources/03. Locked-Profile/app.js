function lockedProfile() {
	let button = Array.from(document.querySelectorAll('button'));
	button.forEach(el => {
		el.addEventListener('click', showMore);
	});

    function showMore(e) {
		let currentDiv = e.target.parentNode;
		let stage = Array.from(
			currentDiv.querySelectorAll('[type="radio"]')
		).filter(el => el.checked)[0].value;

		if (currentDiv.children[9].style.display == 'inline') {
			if (stage == 'unlock') {
				currentDiv.children[9].style.display = 'none';
				e.target.textContent = 'Show more';
			}
		} else if (stage == 'unlock') {
			currentDiv.children[9].style.display = 'inline';
			e.target.textContent = 'Hide it';
		}
	}
}