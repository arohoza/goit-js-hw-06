const textInput = document.querySelector("#name-input");
const output = document.querySelector("#name-output");
console.log(textInput);
console.log(output.textContent);

textInput.addEventListener("input", (event) => {
     output.textContent = event.currentTarget.value;
    
});


// textInput.addEventListener("input", (event) => {
//     if (event.currentTarget.value =='') {
//        output.textContent
//     }
//     output.textContent = event.currentTarget.value;
//     console.log(output.textContent)
// });

 