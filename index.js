/*
0 = Player 1
1 = Player 2
*/
let turn = 'player1'

const game = {
  winningState: [
    //Rows
    ['X', 'X', 'X'],
    ['O', 'O', 'O'],

    //Columns
    ['O', 'O', 'O'],
    ['O', 'O', 'O'],
  ]
}

document.addEventListener('DOMContentLoaded', () => {
  newGame();
});

const newGame = () => {
  const cells = document.getElementsByClassName('cell');

  for (let i = 0; i < cells.length; i++) {
    cells[i].innerText = '';
  }
};

const cellClicked = (cellNumber) => {
  const cells = document.getElementsByClassName('cell');
  const targetedCell = cells[cellNumber];
  if (targetedCell.innerText === '') {
    targetedCell.innerText = 'X';
    console.log('blank cell');
  } else if (targetedCell.innerText === 'X') {
    targetedCell.innerText = 'O';
  } else if (targetedCell.innerText === 'O') {
    targetedCell.innerText = '';
  }
};

const swapTurn = () => {
  if(turn === 'player1'){
    turn = 'player2'
  }else{
    turn = 'player1'
  }
}

const finishTurn = () => {
  swapTurn();
  let main = document.getElementsByClassName('main')[0];
  let turnHeader = document.getElementsByClassName('turn-header')[0]
  console.log("🚀 ~ file: index.js:47 ~ finishTurn ~ main:", main)
  if(turn === 'player1'){
    main.classList.add('player1')
    main.classList.remove('player2')
    turnHeader.innerText = "It's player 1s (red) go!"
  }else{
    main.classList.add('player2')
    main.classList.remove('player1')
    turnHeader.innerText = "It's player 2s (blue) go!"
  }
};

const finishGame = () => {};
