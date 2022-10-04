const textInput = document.querySelector('#name-input');
const textoutput = document.querySelector('#name-output');


const getName = event => {
  textoutput.textContent = event.target.value;
  if (event.target.value === '') {
    textoutput.textContent = 'Anonymous';
  }
};

textInput.addEventListener('input', getName);