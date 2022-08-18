const fontSizeInputEl = document.querySelector('#font-size-control');
// console.log(fontSizeInputEl );
// console.log(fontSizeInputEl.value);
const textEl = document.querySelector("#text")
// console.log(textEl);
textEl.style.fontSize = '56px';


fontSizeInputEl.addEventListener("input", (event) => {
    const fontSize = fontSizeInputEl.value;
    textEl.style.fontSize = fontSize + "px";
     
});
 