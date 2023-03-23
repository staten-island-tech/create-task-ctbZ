const gameBoard = document.querySelector("#gameboard")
const message = document.querySelector("#msg")
const startGame = [
  "", "", "", "", "", "", "", "", ""
]

let turn = "X"
message.textContent = "Player X goes first"

function generateBoard() {
  startGame.forEach((box, index) => {
    const boxEl = document.createElement('div')
    boxEl.classList.add('box')
    boxEl.id = index
    boxEl.addEventListener('click', placeMark)
    gameBoard.append(boxEl)
  })
}
generateBoard()

function placeMark(e) {
  const mark = document.createElement('div')
  mark.classList.add(turn)
  e.target.append(mark)
  turn = turn === "X" ? "O" : "X"
  message.textContent = "It is player " + turn + "'s turn"
  e.target.removeEventListener("click", placeMark)
  checkWin()
}

function checkWin() {
  const allBoxes = document.querySelectorAll(".box")
  const win = [
    [0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]
  ]
  win.forEach(array => {
    const xWin = array.every(box => allBoxes[box].firstChild?.classList.contains('X'))

    if(xWin) {
     message.textContent = "Player X wins!"
    allBoxes.forEach(box => box.replaceWith(box.cloneNode(true))) //cloneNode is to remove addEventListener
    return
   }
  })

  win.forEach(array => {
    const oWin = array.every(box => allBoxes[box].firstChild?.classList.contains('O'))

    if(oWin) {
     message.textContent = "Player O wins!"
    allBoxes.forEach(box => box.replaceWith(box.cloneNode(true))) //cloneNode is to remove addEventListener
    return
   } 
  })
}

