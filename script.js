const container = document.querySelector('.container')

for (let i = 0; i < 16; i++) {
  const row = document.createElement('div')
  container.appendChild(row)
  row.classList.add('row')
  for (let j = 0; j < 16; j++) {
    const box = document.createElement('div')
    row.appendChild(box)
    box.classList.add('box')
  }
}

/* const box = document.querySelector('.box') */
box.addEventListener("mouseover", () => {box.classList.add('covered')});
