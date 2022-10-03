const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listRef = document.querySelector('#ingredients');
const arrToAddEl = [];
ingredients.forEach(ingredient => {
  const ingredientEl = document.createElement('li');
  ingredientEl.textContent = ingredient;
  ingredientEl.classList.add('item');
  arrToAddEl.push(ingredientEl);
});
listRef.append(...arrToAddEl);