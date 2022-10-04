const inputRef = document.querySelector('#validation-input');

const validation = (event) => {
    const {value, dataset, classList} = event.target;
    if (value.length === Number(dataset.length)) {
      classList.remove('invalid');
      classList.add('valid');
    } else {
      classList.add('invalid');
    } 
}

inputRef.addEventListener('blur', validation);

