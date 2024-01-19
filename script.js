const container = document.querySelector('.container')
const button = document.querySelector('button')
const body = document.querySelector('body')


button.addEventListener('click', () => {
  const size = prompt('Please choose the number of rows and columns');
  if (parseInt(size) <= 100) {
    makeGrid(parseInt(size));
  } else {
    const warning = document.createElement('div');
    warning.textContent = 'Please enter a number no bigger than 100!';
    body.insertBefore(warning, container);
  };
});


function makeGrid(rowcol) {
for (let i = 0; i < rowcol; i++) {
  const row = document.createElement('div')
  container.appendChild(row)
  row.classList.add('row')
  for (let j = 0; j < rowcol; j++) {
    const box = document.createElement('div')
    row.appendChild(box)
    box.classList.add('box')
  };
};

const boxes = document.querySelectorAll('.box'); 

boxes.forEach((box) => box.addEventListener('mouseover', () => {
  box.style.backgroundColor = '#DC4B4B'}
))
};





