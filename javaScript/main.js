// Battle Card
var swipeMove =  document.querySelector('#swipeMove')
var hardenMove = document.querySelector('#hardenMove')
var abilityMove = document.querySelector('#abilityMove')
var bagMove = document.querySelector('#bagMove')
var runMove = document.querySelector('#runMove')

swipeMove.addEventListener('click', saySwipe)
hardenMove.addEventListener('click', sayHarden)
abilityMove.addEventListener('click', sayAbil)
bagMove.addEventListener('click', sayBag)
runMove.addEventListener('click', sayRun)



function saySwipe() {
  console.log('swipe')
}
function sayHarden() {
  console.log('harden')
}
function sayAbil() {
  console.log('abil')
}
function sayBag() {
  console.log('bag')
}
function sayRun() {
  console.log('run')
}


// Helper FUn
