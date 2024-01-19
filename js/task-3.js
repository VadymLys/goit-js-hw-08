

const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

nameInput.addEventListener('input', onInputUpdate);

function onInputUpdate() {
    const inputValue = nameInput.value.trim();
    const outputName = inputValue === '' ? 'Anonymous' : inputValue;
    nameOutput.textContent = outputName;
};