// Gameboy
var screen = document.querySelector('#screen')

// Card
var openingCard = document.querySelector('#openingCard')
var battleCard = document.querySelector('#battleCard')
var enemyMoveCard = document.querySelector('#enemyMoveCard')
var playAgainCard = document.querySelector('#playAgainCard')

var outcomeMsg = document.querySelector('#outcome')
var swipeMove =  document.querySelector('#swipeMove')
var hardenMove = document.querySelector('#hardenMove')
var abilityMove = document.querySelector('#abilityMove')
var bagMove = document.querySelector('#bagMove')
var runMove = document.querySelector('#runMove')
var fightMove = document.querySelector('#fightMove')
var openRunMove = document.querySelector('#openRunMove')
var nextMove = document.querySelector('#nextMove')
var playAgainMove = document.querySelector('#playAgainMove')

// Battle 
swipeMove.addEventListener('click', swipe)
hardenMove.addEventListener('click', harden)
abilityMove.addEventListener('click', ability)
fightMove.addEventListener('click', showBattleCard)
nextMove.addEventListener('click', showPlayAgainCard)
playAgainMove.addEventListener('click', showBattleCard)
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
  showEnemyMoveCard()
  }
  function harden() {
    playerStory.triggerFight('harden')
    showEnemyMoveCard()
  }
  function ability() {
    playerStory.triggerFight('ability')
    showEnemyMoveCard()
  }


// Battle Sequence
function showBattleCard() {
  hide(openingCard)
  hide(screen)
  hide(playAgainCard)
  show(battleCard)
}

function showEnemyMoveCard() {
  hide(battleCard)
  show(enemyMoveCard)
}

function showPlayAgainCard() {
  show(screen)
  hide(enemyMoveCard)
  show(playAgainCard)
}

function showOpeningCard() {
  hide(screen)
  hide(playAgainCard)
  show(showBattleCard)
}


// Helper Function 
function hide(e) {
  e.classList.add('hidden')
}

function show(e) {
  e.classList.remove('hidden')
}

