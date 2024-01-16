function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const controls = document.querySelector('#controls')
const input = controls?.querySelector('input')
const dataCreate = controls?.querySelector('[data-create]')
const dataDestroy = controls?.querySelector('[data-destroy]')
const boxes = document.querySelector('#boxes')
const initialSize = 30;

const createBoxes = (amount) => {
  let amountNum = parseInt(amount)
  if(amountNum<= 0 || amountNum >100) return 
  boxes.innerHTML = '';
  let size = initialSize;
  Array.from({length:amountNum}).forEach( () => {
    const div = document.createElement('div')
    div.style.backgroundColor = getRandomHexColor()
    div.style.width = `${size}px`
    div.style.height = `${size}px`

    boxes.appendChild(div)

    size +=10;

  })

}

dataCreate?.addEventListener('click',() =>  {
  const count = input?.value
  createBoxes(count)
  input.value = ''
})

dataDestroy?.addEventListener('click', () => {
  boxes.innerHTML = '';
})