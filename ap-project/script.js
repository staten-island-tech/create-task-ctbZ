const gameboard = document.querySelector("#board")
const msg = document.querySelector('#info')
const makeboxes = [
  "", "", "", "", "", "", "", "", ""
]

function creategameboard() {
  makeboxes.forEach((box, index) => {
    const box = document.createElement('div')
    box.classList.add('box')
    box.id = index
    gameboard.append(box)
  })
}