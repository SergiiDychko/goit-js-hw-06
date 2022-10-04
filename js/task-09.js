function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeColorBtnRef = document.querySelector('.change-color');
const colorValueRef = document.querySelector('.color');

const getChangeColor = () => {
  const newColor = getRandomHexColor();
  document.body.style.backgroundColor = newColor;
  colorValueRef.textContent = newColor;
};
changeColorBtnRef.addEventListener('click', getChangeColor);