const form = document.querySelector('.login-form');

function handleSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === '' || password.value === '') {
    return console.log('Всі поля повинні бути заповнені');
  }

  console.log(`E-mail: ${email.value}, Password: ${password.value}`);
  event.currentTarget.reset();
}

form.addEventListener('submit', handleSubmit);