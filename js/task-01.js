// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5

const categories = document.querySelectorAll('#categories .item');
console.log('Number of categories:', categories.length);

categories.forEach(category => {
    console.log('');
    console.log('Category:', category.querySelector('h2').textContent);
    console.log('Elements:', category.querySelectorAll('li').length);
});
