function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const createButtonRef = document.querySelector('button[data-create]');
console.log(createButtonRef);

const destroyButtonRef = document.querySelector('button[data-destroy]');
console.log(createButtonRef);

const inputRef = document.querySelector('input');

const boxesRef= document.querySelector('#boxes');
console.log(inputRef);
console.log(inputRef.value);

let amount=0;
const inputValue = inputRef.addEventListener("input", (event) => {
 amount = event.currentTarget.value;
  console.log(amount);
 });

const  createBoxes=(amount)=> {}

createButtonRef.addEventListener("click", createBoxes );