document.addEventListener('DOMContentLoaded', () => {
  newGame();
})

const newGame = () => {
  const cells = document.getElementsByClassName('cell');

  for (let i = 0; i < cells.length; i++){
    cells[i].innerText = ' ';
    console.log(cells[i])
  }
}