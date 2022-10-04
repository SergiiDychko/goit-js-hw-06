function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const createBtnRef = document.querySelector('button[data-create]');
const destroyBtnRef = document.querySelector('button[data-destroy]');
const boxesRef = document.querySelector('#boxes');

const createBoxes = () => {
  const amount = document.querySelector('#controls input').value;
  const boxesArr = [];
  let divSize = 30;
  for (let i = 1; i <= amount; i += 1) {
    boxesArr.push(
      `<div style="width:${divSize}px; height:${divSize}px; background-color:${getRandomHexColor()}"></div>`
    );
    divSize += 10;
  }
  boxesRef.insertAdjacentHTML('beforeend', boxesArr.join(''));
}

const destroyBoxes = () => {
boxesRef.innerHTML = '';
}

createBtnRef.addEventListener('click', createBoxes)
destroyBtnRef.addEventListener('click', destroyBoxes);