const render = document.querySelector('[data-action="render"]');
const destroy = document.querySelector('[data-action="destroy"]');
const boxes = document.getElementById('boxes');
render.addEventListener('click', getAmount);
destroy.addEventListener('click', destroyBoxes);

function getAmount() {
  const amount = +document.querySelector('#controls input').value;
  createBoxes(amount);
}

function createBoxes(amount) {
  let basicSize = 30;
  const fragment = document.createDocumentFragment();
  for (var i = 0; i < amount; i++) {
    let size = basicSize + i * 10;
    const div = document.createElement('div');
    div.style.cssText = `width: ${size}px; height: ${size}px; background-color: rgba( ${random()} , ${random()} , ${random()} )`;
    fragment.appendChild(div);
  }
  boxes.appendChild(fragment);
}

function destroyBoxes() {
  boxes.innerHTML = '';
}

function random() {
  return Math.floor(Math.random() * 256);
}