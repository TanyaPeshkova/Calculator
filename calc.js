function clearDisplay() {
	const display = document.getElementById('input');
	display.value = '';
}

function append(value) {
	const display = document.getElementById('input');
	display.value += value
}

function calculate() {
	const display = document.getElementById('input');
	try {
		display.value = eval(display.value);
	} catch (error) {
		display.value = 'Ошибка';
	}
}