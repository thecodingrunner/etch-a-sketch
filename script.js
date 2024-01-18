const container = document.querySelector('.container')
const button = document.querySelector('button')

function gridSize() {
  return parseInt(prompt('Please choose the number of rows and columns'))
}

button.addEventListener('click', () => {
  gridSize()
   
})

for (let i = 0; i < gridSize(); i++) {
  const row = document.createElement('div')
  container.appendChild(row)
  row.classList.add('row')
  for (let j = 0; j < gridSize(); j++) {
    const box = document.createElement('div')
    row.appendChild(box)
    box.classList.add('box')
  }
}

const boxes = document.querySelectorAll('.box'); 

boxes.forEach((box) => box.addEventListener('mouseover', (event) => {
  box.style.backgroundColor = 'red'}
))


