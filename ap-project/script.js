const boxEl = document.querySelectorAll('child') //searches all elements in doc with child (includes?)
const containerEl = document.getElementById('container-box')
const winEl = document.getElementById('win')
const winmsgEl = document.getElementById('winmsg')
const restartbtn = document.getElementById('restartbtn')
const player_x = 'x'
const player_o = 'o'
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
