const categoriesList = document.getElementById('categories')
const categories = Array.from(categoriesList.getElementsByClassName('item'))
console.log('Number of categories: ' + categories.length);

categories.forEach(category => {
    const h2 = category.querySelector('h2')
    const ul = category.querySelector('ul')
    console.log('Category: ' + h2.innerText);
    console.log('Elements: ' + ul.childElementCount);
    
});
