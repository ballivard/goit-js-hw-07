const categoryEl = document.querySelectorAll('.item');
console.log(`В списке ${categoryEl.length} категории`);

const categoriesCountEl = document.querySelectorAll(`h2`)

const liCount = categoriesCountEl.forEach(el => 
    console.log(`Категория: ${el.textContent}
        Количество элементов: ${el.parentNode.querySelectorAll('li').length}`)
)