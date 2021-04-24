// Card
var openingCard = document.querySelector('#openingCard')
var battleCard = document.querySelector('#battleCard')


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
fightMove.addEventListener('click', showBattleCard)
// bagMove.addEventListener('click', )
// runMove.addEventListener('click', )


// Initialize Story
var playerStory = new Game()
pikpakpo()
function pikpakpo() {
  return playerStory
}  
  // Player's Moves
  function swipe() {   
  playerStory.triggerFight('swipe')
  }
  function harden() {
    playerStory.triggerFight('harden')
  }
  function ability() {
    playerStory.triggerFight('ability')
  }


// Battle Sequence
function showBattleCard() {
  hide(openingCard)
  show(battleCard)
  prioitize(battleCard)
  unprioitize(openingCard)
}



// Helper Function 

function hide(e) {
  e.classList.add('hidden')
}

function show(e) {
  e.classList.remove('hidden')
}

function prioitize(e) {
  e.classList.add('prioitize')
}

function unprioitize(e) {
  e.classList.remove('prioitize')
}