const container = document.querySelector('.container')
const button = document.querySelector('button')
const body = document.querySelector('body')

// Event listener that prompts user for a grid size upon clicking of the button. 
// If the number is less or equal to 100 the grid creation function is run, otherwise a warning message is sent. 
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

// Grid creation function that is run once the grid size is inputted, creating a grid of the specified size.
// Interaction feature also included below.
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

// If the user runs the mouse over a box that box will highlight in red. 
const boxes = document.querySelectorAll('.box'); 

boxes.forEach((box) => box.addEventListener('mouseover', () => {
  box.style.backgroundColor = '#DC4B4B'}
))
};





