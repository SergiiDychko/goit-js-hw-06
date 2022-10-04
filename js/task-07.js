const sliderRef = document.querySelector('#font-size-control');
const textRef = document.querySelector('#text');

const changeFontSize = event =>
    textRef.style.fontSize = `${event.target.value}px`;

sliderRef.addEventListener('input', changeFontSize);