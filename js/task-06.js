const textInputEl = document.querySelector("#validation-input");

textInputEl.addEventListener("blur", () => {
  const textInputLength = textInputEl.getAttribute("data-length");
  if (textInputLength == textInputEl.value.length) {
    textInputEl.classList.add("valid");
    textInputEl.classList.remove("invalid");
  } else {
    textInputEl.classList.add("invalid");
    textInputEl.classList.remove("valid");
  }
});
