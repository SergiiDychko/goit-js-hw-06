const textInput = document.querySelector('#name-input');
const textoutput = document.querySelector('#name-output');

textInput.addEventListener('input', event => {
    textoutput.textContent = event.currentTarget.value;
    if (textInput.value === '') {
      textoutput.textContent = 'Anonymous';
    }
});