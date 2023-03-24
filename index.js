document.addEventListener('DOMContentLoaded', () => {
  newGame();
})

const newGame = () => {
  const cells = document.getElementsByClassName('cell');

  for (let i = 0; i < cells.length; i++){
    cells[i].innerText = '';
  }
}

 const cellClicked = (cellNumber) => {
  const cells = document.getElementsByClassName('cell')
  const targetedCell = cells[cellNumber]
  if(targetedCell.innerText === ""){
    targetedCell.innerText = "X"
    console.log("blank cell")
  } else if(targetedCell.innerText === "X"){
    targetedCell.innerText = "O"
  } else if (targetedCell.innerText === "O"){
    targetedCell.innerText = ""
  }
 }