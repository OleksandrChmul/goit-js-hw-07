const inputEl = document.querySelector('#name-input')
const spanEl = document.querySelector('#name-output')
inputEl.addEventListener('input', updateName)
function updateName() {
	const inputText = inputEl.value.trim()
	const outputText = inputText === '' ? 'Anonimus' : inputText
	spanEl.textContent = outputText
}
