// Intro Page
var introPage = document.querySelector('#introPage')
var showcase = document.querySelector('#showcase')
var pokeballBtn = document.querySelector('#bigPokeball')
var profOak = document.querySelector('#profOak')
var oaksMsg = document.querySelector('#oaksMsg')
var oaksMsgBox = document.querySelector('#oaksMsgBox')
var bgStripe = document.querySelector('#bgStripe')
var pageOneBtn = document.querySelector('#pageOneBtn')
var profOakText = document.querySelector('#profOakText')
var oaksMsgBox = document.querySelector('#oaksMsgBox')
var formCard = document.querySelector('#formCard')
var nameForm = document.querySelector('#name')
var pokemonSheet = document.querySelector('#pokemonSheet')
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

var click = 0
function gotoNext() {
click++
if(click <= 1) { 
  profOakText.innerHTML = `<p>People affectionately refer to me as the Pokemon professor</p>`
  } else if (click === 2) {
    profOakText.innerHTML = `<p>But you should call me 'The doctor Professor'</p>`
  } else if (click === 3) {
    profOakText.innerHTML = `<p>..so mind your manners..</p>`
  }  else if (click === 4) {
    profOakText.innerHTML = `<p>Before you we start, can you tell me... </p>
    <p>What is your name?</p>`
  } else if (click === 5) {
    show(formCard)
    hide(profOakText)
  } else if (click === 6) {
    hide(formCard)
    show(profOakText)
    profOakText.innerHTML = `<p>${nameForm.value}? Well, there are some things in life that we can't choose...</p>`
  } else if (click === 7) {
    profOakText.innerHTML = `<p>Well ${nameForm.value}, you may be no oak but sure are a pokemon-whaa?!?!</p>`
  } else if (click === 8) {
    profOakText.innerHTML = `<p>Yup, you're a pokemon, so get over it..</p>
    <p>uh, which one are you again?</p>`
  } else if (click === 9) {
    hide(profOakText)
    show(pokemonSheet)
  }
}

// Initialize Story
var playerStory = new Game(nameForm.value)
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

