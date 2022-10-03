let counterValue = 0;
const valueRef = document.querySelector('#value');
const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');

decrementBtn.addEventListener('click', () => {
    counterValue -= 1;
    valueRef.textContent = counterValue;
    return;
});

incrementBtn.addEventListener('click', () => {
  counterValue += 1;
  valueRef.textContent = counterValue;
  return;
});