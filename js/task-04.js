
const counterEl = document.querySelector('#value');
let counterValue = 0;

// console.log(counterEl);

const decrementBtn = document.querySelector('button[data-action="decrement"]');
console.log(decrementBtn.dataset.action);

decrementBtn.addEventListener("click", () => {
  counterValue -= 1;
    // console.log(counterValue);
    counterEl.innerHTML = counterValue;
});

const incrementBtn = document.querySelector('button[data-action="increment"]');
console.log(incrementBtn.dataset.action);

incrementBtn.addEventListener("click", () => {
    counterValue += 1;
    // console.log(counterValue);
    counterEl.innerHTML = counterValue;
    
});

 