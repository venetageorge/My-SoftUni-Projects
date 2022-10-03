function toggle() {
    let myButton = document.getElementsByClassName("button")[0];
    let myExtra = document.getElementById("extra");

    if (myButton.textContent === 'More') {
		myExtra.style.display = 'block';
	} else {
		myExtra.style.display = 'none';
	}

    myButton.textContent = myButton.textContent == 'More' ? 'Less' : 'More';
}