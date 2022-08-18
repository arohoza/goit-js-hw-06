const categoriesListEl = document.querySelector("#categories");
const categoriesLength = categoriesListEl.children.length;
console.log(`Number of categories: ${categoriesLength}`);

const itemListEl = [...categoriesListEl.children];


itemListEl.forEach(item => {
    const itemTitleEL = item.firstElementChild.textContent;
    const itemLengthEl = item.lastElementChild.children.length;
  
    console.log(`Category: ${itemTitleEL}`);
    console.log(`Elements: ${itemLengthEl}`);
});
