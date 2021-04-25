// Intro Page
var introPage = document.querySelector('#introPage')
var showcase = document.querySelector('#showcase')
var pokeballBtn = document.querySelector('#bigPokeball')
var profOak = document.querySelector('#profOak')
var oaksMsg = document.querySelector('#oaksMsg')
var oaksMsgBox = document.querySelector('#oaksMsgBox')
var bgStripe = document.querySelector('#bgStripe')
var pageOneBtn = document.querySelector('#pageOneBtn')
// var profOakText = document.querySelector('#profOakText')
var oaksMsgBox = document.querySelector('#oaksMsgBox')

// Main
var header = document.querySelector('header')
var footer = document.querySelector('footer')

// Enemy
var enemyPokemon = document.querySelector('#enemyPokemon')
var enemyMove = document.querySelector('#enemyMove')
var playerPokemon = document.querySelector('#playerPokemon')

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
pokeballBtn.addEventListener('click', startIntro)
// bagMove.addEventListener('click', )
// runMove.addEventListener('click', )
pageOneBtn.addEventListener('click', gotoNext)

function gotoNext() {
var click = 0
click++
if(click === 0) {
  oaksMsgBox.innerHTML = '<p> what</p>'
  }
}


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

// Intro Page
function startIntro() {
  hide(pokeballBtn)
  show(profOak)
  show(bgStripe)
  show(oaksMsg)
  show(oaksMsgBox)
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
  changeEnemyText()
}

function changeEnemyText() {
  enemyPokemon.innerHTML = `${playerStory.gymleader.pokemon.toUpperCase()}`
  enemyMove.innerHTML = `${playerStory.gymleaderMove.toUpperCase()}`
  playerPokemon.innerHTML = `${playerStory.player.pokemon.toUpperCase()}`

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

