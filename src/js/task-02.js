const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];

const ingredientsList = document.querySelector('#ingredients')

const element = ingredients.map(option => {
  const ingredientsListEl = document.createElement('li');
  ingredientsListEl.textContent = option;
  return ingredientsListEl;
  console.log(ingredientsListEl)
}
);

ingredientsList.append(...element);
