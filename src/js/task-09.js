function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyEl = document.querySelector('body');
// console.log(bodyEl);
const buttonChangeColorEl = document.querySelector('.change-color');
// console.log(buttonChangeColorEl);

const outputChangeColorEl = document.querySelector('.color');
// console.log(outputChangeColorEl);



const handleClick = () => {
  bodyEl.style.backgroundColor = getRandomHexColor();
  outputChangeColorEl.textContent = bodyEl.style.backgroundColor;
  // console.log(bodyEl.style.backgroundColor);
  // console.log(outputChangeColorEl.textContent);
};

buttonChangeColorEl.addEventListener("click", handleClick);