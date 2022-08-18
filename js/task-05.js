const textInput = document.querySelector("#name-input");
const output = document.querySelector("#name-output");
console.log(textInput);
console.log(output.textContent);

textInput.addEventListener("input", (event) => {
  if (textInput.value == "") {
    output.textContent = "Anonymous";
  } else {
    output.textContent = event.currentTarget.value;
  }
});
