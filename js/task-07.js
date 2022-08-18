const fontSizeInputEl = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");
textEl.style.fontSize = "56px";

fontSizeInputEl.addEventListener("input", (event) => {
  const fontSize = fontSizeInputEl.value;
  textEl.style.fontSize = fontSize + "px";
});
