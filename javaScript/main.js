// Card
var outcomeMsg = document.querySelector('#outcome')
var swipeMove =  document.querySelector('#swipeMove')
var hardenMove = document.querySelector('#hardenMove')
var abilityMove = document.querySelector('#abilityMove')
var bagMove = document.querySelector('#bagMove')
var runMove = document.querySelector('#runMove')
var fightMove = document.querySelector('#fightMove')
var openRunMove = document.querySelector('#openRunMove')


// Battle 
swipeMove.addEventListener('click', swipe)
hardenMove.addEventListener('click', harden)
abilityMove.addEventListener('click', ability)
// bagMove.addEventListener('click', )
// runMove.addEventListener('click', )

var playerStory = new Game()


pikpakpo()
function pikpakpo() {
  return playerStory
}

  function swipe() {   
  playerStory.triggerFight('swipe')
  }
  function harden() {
    playerStory.triggerFight('harden')
  }
  function ability() {
    playerStory.triggerFight('ability')
  }



// Helper Function 

function hide(e) {
  e.classList.add('hidden')
}

function show() {
  e.classList.remove('hidden')
}

function prioitize() {
  e.classList.add('prioitize')
}

function unprioitize() {
  e.classList.remove('prioitize')
}