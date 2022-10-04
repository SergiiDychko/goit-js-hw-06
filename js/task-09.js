function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeColorBtnRef = document.querySelector('.change-color');
const colorValueRef = document.querySelector('.color');

const getChangeColor = () => {
  document.body.style.backgroundColor = getRandomHexColor();
};
const getChangeText = () => {
  colorValueRef.textContent = getRandomHexColor();
};

changeColorBtnRef.addEventListener('click', getChangeColor);
changeColorBtnRef.addEventListener('click', getChangeText);