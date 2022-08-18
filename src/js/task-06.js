const textInputEl = document.querySelector("#validation-input");
const textInputLength = textInputEl.getAttribute('data-length');
// console.log(textInputEl.value.length);
console.log(textInputLength);

const validClass = document.querySelector(".valid");
// console.log(validClass);
 


textInputEl.addEventListener("blur", () => {
    console.log(textInputEl.value.length);
if (textInputLength == textInputEl.value.length && textInputEl.classList.contains('invalid'))
{
  textInputEl.classList.replace('invalid', 'valid')
}
else if (textInputLength == textInputEl.value.length && !textInputEl.classList.contains('invalid'))
{
  textInputEl.classList.add('valid')
}
else if (textInputLength !== textInputEl.value.length && textInputEl.classList.contains('valid')) 
{
  textInputEl.classList.replace('valid', 'invalid') 
}
else {
    textInputEl.classList.add('invalid');
};

});




// textInputEl.addEventListener("blur", () => {
//     console.log(textInputEl.value.length);
//     (textInputLength == textInputEl.value.length ? textInputEl.classList.add('valid') : textInputEl.classList.add('invalid')) 
    
// });

// textInputEl.addEventListener("blur", () => {
//     console.log(textInputEl.value.length);
//     if (textInputLength == textInputEl.value.length) {
         
            
        
//             textInputEl.classList.add('valid');
//     } else {
//         textInputEl.classList.add('invalid')
//     };
    
// });
 