const sliderRef = document.querySelector('#font-size-control');
const textRef = document.querySelector('#text');

const changeFontSize = () =>
    textRef.style.fontSize = `${sliderRef.value}px`;

sliderRef.addEventListener('input', changeFontSize);