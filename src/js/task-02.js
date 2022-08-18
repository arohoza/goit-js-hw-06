const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

// const listRef = document.querySelector("#ingredients");
// const funcList = (ingredients) => {
// const markup = ingredients.map(name =>{
// return `<li class=item >${name}</li>` }
// ).join('')
// listRef.innerHTML = markup;
// } 
 
// funcList(ingredients);

 

  const listRef = document.querySelector("#ingredients");
const funcList = (ingredients) => {
const markup = ingredients.map(name =>{
  const item = document.createElement("li")
  item.classList.add('item');
  item.textContent = name;
  // console.log(item); 
  listRef.appendChild(item);
}
)
} 
 
funcList(ingredients);
  