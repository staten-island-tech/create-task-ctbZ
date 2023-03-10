const boxEl = document.querySelectorAll('child') //searches all elements in doc with child (includes?)
const containerEl = document.getElementById('container-box')
const winEl = document.getElementById('win')
const winmsgEl = document.getElementById('winmsg')
const restartbtn = document.getElementById('restartbtn')
const player_x = 'x'
const player_o = 'o'
let player_o_turn = false //start with player x
const win = [
  [1,2,3],
  [4,5,6],
  [7,8,9],
  [1,4,7],
  [2,5,8],
  [3,6,9],
  [1,5,9],
  [3,5,7]
]

start()

restartbtn.addEventListener('click', start)

function start() {
  player_o_turn = false
  boxEl.forEach(box => {
    box.classList.remove(player_x)
    box.classList.remove(player_o)
    box.removeEventListener('click', boxclick)
    box.addEventListener('click', boxclick, { once: true}) //prevent click agian on same box 
  })
  hover()
  winmsgEl.classList.remove('show')
}



function boxclick(e) {
  const box = e.target  //hover effect target box
  const turn = player_o_turn ? player_o : player_x
  mark( box, turn)
  if (checkWin(turn)) {
    gameover(false)
  } else if (draw()) {
    gameover(true)
  } else {
    swap()
    hover()
  }
}

function gameover(draw) {
  if (draw) {
    winmsgEl.innerText = "Draw Game"
  } else {
    winmsgEl.innerText = 'player ${player_o_turn ? "o" : "x"} wins'
  }
  winmsgEl.classList.add('show')
}

function draw() {
	return [...boxEl].every(box => { //... spread syntax
		return cell.classList.contains(player_x) || cell.classList.contains(player_o) //logical OR
	})
}

function mark(box, turn) {
  box.classList.add(turn)
}

function swap() {
  player_o = !player_o_turn
}

function hover() {
  containerEl.classList.remove(player_x)
  containerEl.classList.remove(player_o)
  if (player_o_turn) {
    containerEl.classList.add(player_o)
  } else {
    containerEl.classList.add(player_x)
  }
}
