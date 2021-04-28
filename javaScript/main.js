var abilityMove = document.querySelector('#abilityMove')
var potionMove = document.querySelector('#potionMove')
var battleCard = document.querySelector('#battleCard')
var bgStripe = document.querySelector('#bgStripe')
var bulbasaur = document.querySelector('#bulbasaur')
var cardText = document.querySelector('#cardText')
var charmander = document.querySelector('#charmander')
var enemyCard = document.querySelector('#enemyCard')
var enemyCardContent = document.querySelector('#enemyCardContent')
var enemyHpFull = document.querySelector('#efhp')
var enemyHpOneThird = document.querySelector('#eothp')
var enemyHpTwoThird = document.querySelector('#etthp')
var enemyMove = document.querySelector('#enemyMove')
var enemyMoveCard = document.querySelector('#enemyMoveCard')
var enemyWins = document.querySelector('#enemyWins')
var enemyPokemonSprite = document.querySelector('#enemyPokemonSprite')
var enemyPokemonText = document.querySelector('#enemyPokemonText')
var enemyPokemonTutorialSprite = document.querySelector('#enemyPokemonTutorialSprite')
var fightMove = document.querySelector('#fightMove')
var footer = document.querySelector('footer')
var formCard = document.querySelector('#formCard')
var gymleaderCard = document.querySelector('#gymleaderCard')
var hardenMove = document.querySelector('#hardenMove')
var header = document.querySelector('header')
var introPage = document.querySelector('#introPage')
var loadEgg = document.querySelector('#loadEgg')
var nameForm = document.querySelector('#name')
var nextMove = document.querySelector('#nextMove')
var nextMoveOak = document.querySelector('#nextMoveOak')
var oaksMsg = document.querySelector('#oaksMsg')
var oaksMsgBox = document.querySelector('#oaksMsgContent')
var openingCard = document.querySelector('#openingCard')
var openRunMove = document.querySelector('#openRunMove')
var outcomeMsg = document.querySelector('#outcome')
var pageOneBtn = document.querySelector('#pageOneBtn')
var pikpakpo = document.querySelector('#pikpakpo')
var playAgainCard = document.querySelector('#playAgainCard')
var playAgainMove = document.querySelector('#playAgainMove')
var playerHpFull = document.querySelector('#pfhp')
var playerHpOneThird = document.querySelector('#pothp')
var playerHpTwoThird = document.querySelector('#ptthp')
var playerInfo = document.querySelector('#pokeInfo')
var playerPokemon = document.querySelector('#playerPokemon')
var pokemonSheet = document.querySelector('#pokemonSheet')
var playerSprite = document.querySelector('#playerSprite')
var playerTutorialSprite = document.querySelector('#playerTutorialSprite')
var playerWins = document.querySelector('#playerWins')
var pokeballBtn = document.querySelector('#bigPokeball')
var pokemonDo = document.querySelector('#pokemonDo')
var potionSlot = document.querySelector('#potionSlot')
var profOak = document.querySelector('#profOak')
var profOakText = document.querySelector('#profOakText')
var runMove = document.querySelector('#runMove')
var saveBall = document.querySelector('#saveBall')
var savedMsg = document.querySelector('#savedMsg')
var screen = document.querySelector('#screen')
var showcase = document.querySelector('#showcase')
var skipIntroBtn = document.querySelector('#skipIntro')
var squirtle = document.querySelector('#squirtle')
var swipeMove =  document.querySelector('#swipeMove')
var trainerName = document.querySelector('#trainerName')
var tutorialCard = document.querySelector('#tutorialCard')
var tutorialEnemy = document.querySelector('#tutorialEnemy')
var tutorialUser = document.querySelector('#tutorialUser')
var userInfo = document.querySelector('#userInfo')
var winPlayerText = document.querySelector('#winPlayerText')
var winEnemyText = document.querySelector('#winEnemyText')
var playerStory;

window.addEventListener('load', checkForSave)
abilityMove.addEventListener('click', ability)
bulbasaur.addEventListener('click', chooseBulbasaur)
charmander.addEventListener('click', chooseCharmander)
fightMove.addEventListener('click', showBattleCard)
hardenMove.addEventListener('click', harden)
loadEgg.addEventListener('click', loadGame)
nextMove.addEventListener('click', showPlayAgainCard)
nextMoveOak.addEventListener('click', gotoNextPanel)
pageOneBtn.addEventListener('click', gotoNext)
playAgainMove.addEventListener('click', showBattleCard)
pokeballBtn.addEventListener('click', startIntro)
potionMove.addEventListener('click', usePotion)
saveBall.addEventListener('click', saveGame)
skipIntroBtn.addEventListener('click', skipIntro)
squirtle.addEventListener('click', chooseSquirtle)
swipeMove.addEventListener('click', swipe)


// Introduction
var click = 0
function gotoNext(pokemon) {
  if(!nameForm.value && click === 5) {
    nameForm.placeholder = "your name, bud"
    click = 5
    return;
  }
  click++
  if (click <= 1) { 
    profOakText.innerHTML = `<p>People affectionately refer to me as the Pokemon professor</p>`
    } else if (click === 2) {
      profOakText.innerHTML = `<p>But you should call me <q>The doctor Professor</q></p>`
    } else if (click === 3) {
      profOakText.innerHTML = `<p>..so mind your manners..</p>`
    }  else if (click === 4) {
      profOakText.innerHTML = `<p>Before you we start, can you tell me... </p>
      <p>What is your name?</p>`
    } else if (click === 5) {
      hide(profOakText)
      show(formCard)
    } else if (click === 6) {
      profOakText.innerHTML = `<p>${nameForm.value.toUpperCase()}? Well, there are some things in life that we can't choose...</p>`
      hide(formCard)
      show(profOakText) 
    } else if (click === 7) {
      profOakText.innerHTML = `<p>Well ${nameForm.value.toUpperCase()}, you may not be an oak but at least are a pokemo-whaa?!?!</p>`
    } else if (click === 8) {
      profOakText.innerHTML = `<p>Yup, you're a pokemon, so get over it..</p>
      <p>uh, which one are you again?</p>`
    } else if (click === 9) {
      hide(profOakText)
      hide(pageOneBtn)
      show(pokemonSheet)
    } else if (click === 10) {
      hide(pokemonSheet)
      show(pageOneBtn)
      profOakText.innerHTML = `<p>Oh, thats right.. a ${pokemon.toUpperCase()}..</p>
      <p class="tiny-text">probably another trash pokemon...</p>`
      show(profOakText)
    } else if (click === 11) {
      profOakText.innerHTML = `<p>Anyways, ${nameForm.value.toUpperCase()}</p>
      <p>Well, are you ready for your first day?</p>
      <p class="tiny-text">or for anything, lol...</p>`
    } else if (click === 12) {
      hide(introPage)
      show(header)
      show(footer)
      show(showcase)
      show(playerTutorialSprite)
      updateHeader()
      summonOak()
    }
}

function skipIntro() {
  hide(introPage)
  hide(tutorialEnemy)
  hide(enemyPokemonTutorialSprite)
  hide(loadEgg)
  hide(pikpakpo)
  hide(tutorialCard)
  hide(skipIntroBtn)
  show(enemyCard)
  show(footer) 
  show(header)
  show(userInfo)
  show(showcase)
  return playerStory = new Game('Ash', summonPikachu())
}

function chooseBulbasaur() {
  var bulbasaur = {
    pokemon: 'bulbasaur',
    move: 'vinewhip' 
  }
  playerTutorialSprite.src = '/assets/pokemon/bulbasaur.png'
  playerTutorialSprite.alt = 'bulbasaur'
  pokemonDo.innerText = bulbasaur.pokemon.toUpperCase()
  playerSprite.src = 'assets/pokemon/bulbasaur.png'
  summonOak()
  gotoNext(bulbasaur.pokemon)
  return playerStory = new Game(nameForm.value, bulbasaur)
}

function chooseCharmander() {
  var charmander = {
    pokemon: 'charmander',
    move: 'ember',
  }
  playerTutorialSprite.src = '/assets/pokemon/charmander.png'
  playerTutorialSprite.alt = 'charmander'
  pokemonDo.innerText = charmander.pokemon.toUpperCase()
  gotoNext('charmander')
  playerSprite.src = 'assets/pokemon/charmander'

  return playerStory = new Game(nameForm.value, charmander)
}

function chooseSquirtle() {
  var squirtle = {
    pokemon: 'squirtle',
    move: 'bubble' 
  }
  pokemonDo.innerText = squirtle.pokemon.toUpperCase()
  playerTutorialSprite.src = '/assets/pokemon/squirtle.png'
  playerTutorialSprite.alt = 'squirtle'
  playerSprite.src = 'assets/pokemon/squirtle.png'

  gotoNext(squirtle.pokemon)
  return playerStory = new Game(nameForm.value, squirtle)
}

function summonOak() {
  enemyPokemonTutorialSprite.src = 'assets/icons/professor-oak.png'
  enemyPokemonTutorialSprite.alt = 'Professor Oak'
  enemyPokemonTutorialSprite.classList.remove('pokemon')
  enemyPokemonTutorialSprite.classList.add('prof-oak-small')
}

function summonPikachu() {
  var pikachu = {
    pokemon: 'pikachu',
    move: 'lightning'
  }
  pokemonDo.innerText = pikachu.pokemon.toUpperCase()
  playerTutorialSprite.src = 'assets/pokemon/pikachu.png'
  playerTutorialSprite.alt = 'pikachu'
  playerSprite.src = 'assets/pokemon/pikachu.png'
  return pikachu
}

function summonCaterpie() {
  var caterpie = {
    pokemon: 'caterpie',
    move: 'string shot'
  }
  enemyPokemonTutorialSprite.src = 'assets/pokemon/caterpie.png'
  enemyPokemonTutorialSprite.alt = 'Caterpie'
  enemyPokemonTutorialSprite.classList.add('pokemon')
  enemyPokemonTutorialSprite.classList.remove('prof-oak-small')
  playerStory.gymleader = new Player('Tutorial Person', caterpie)
  changeEnemyText()
  return caterpie
}

// Tutorial  
var count = 0
function gotoNextPanel() {
  count++ 
  switch (count) {
    case 1:
      cardText.innerText =  `The rules are just like rock paper scissors but with your body!`
      nextMoveOak.innerText = 'Um..'
      break;
    case 2:
      cardText.innerText =  `Hey, this is your life now so you get used to it, now listen to the rules carefully`
      nextMoveOak.innerText = 'Ok..'
      break;
    case 3:
      cardText.innerText =  `SWIPE will always beat ABILITY`
      nextMoveOak.innerText = 'Got it'
      break;
    case 4:
      cardText.innerText =  `ABILITY will always beat HARDEN`
      nextMoveOak.innerText = 'I see'
      break;
    case 5:
      cardText.innerText =  `And HARDEN will always beat SWIPE`
      nextMoveOak.innerText = 'Alright'
      break;
    case 6:
      cardText.innerText =  `I will say it again because you're a bagel.`
      nextMoveOak.innerText = 'Excuse me?!'
      break;
    case 7:
      cardText.innerText =  `I said! SWIPE beats ABILITY. ABILITY beats HARDEN. HARDEN beats SWIPE! You got it?!`
      nextMoveOak.innerText = 'I think so..'
      break;
    case 8:
      cardText.innerText =  `Okay! Are you ready to start your training?`
      nextMoveOak.innerText = 'Yah!'
      break;
    case 9:
      hide(profOak)
      hide(tutorialCard)
      show(battleCard)
      show(winEnemyText)
      show(winPlayerText)
      summonCaterpie()
      break;       
    case 10:
      cardText.innerText =  `Now Listen closely because its about to get dangerous for you`
      nextMoveOak.innerText = 'Um..'
      break;
    case 11:
      cardText.innerText =  `You will now duel other pokemons.. to THE DEATH!`
      nextMoveOak.innerText = 'NO!'
      break;
    case 12:
      cardText.innerText =  `Okay, not to the death but you'll be badly injured!`
      nextMoveOak.innerText = 'Thats better?'
      break; 
    case 13:
      cardText.innerText =  `Since the stakes are higher, the rules change too`
      nextMoveOak.innerText = 'Tell me more..'
      break; 
    case 14:
      cardText.innerText =  `You have a finite amount of HP and you'll battle more than one pokemon in a row`
      nextMoveOak.innerText = `This sucks!'`
      break;  
    case 15:
      cardText.innerText =  `I know, ${playerStory.player.name.toUpperCase()}, I know.`
      nextMoveOak.innerText = 'Oh..'
      break; 
    case 16:
      cardText.innerText =  `Anyways...you will also now have the option to use a potion to heal youself`
      nextMoveOak.innerText = 'Thats nice'
      break; 
    case 17:
      cardText.innerText =  `Instead of measuring your success in wins it will be measured in badges, capiche?`
      nextMoveOak.innerText = 'Capiche.'
      break; 
    case 18:
      cardText.innerText =  `And you'll now face gymleaders with much more years of experience than you`
      nextMoveOak.innerText = 'I want out!'
      break; 
    case 19:
      cardText.innerText =  `You can take the coward way out and hit the save button if you want to take a break`
      nextMoveOak.innerText = 'Neat!'
      break; 
    case 20:
      cardText.innerText =  `Off you go!`
      nextMoveOak.innerText = 'Noo!!'
      playAgainMove.innerText = `Try again!`
      hide(enemyPokemonTutorialSprite)
      hide(playerTutorialSprite)
      hide(tutorialUser)
      show(playerSprite)
      show(userInfo)
      break;
    case 21: 
    hide(tutorialCard)
    hide(tutorialEnemy)
    show(battleCard)  
    show(gymleaderCard)
    show(potionSlot)
    summonCaterpie()
      break;
  } 
}

// Moves
function swipe() {
  if (playerStory.player.tutorialComplete) {
    showEndTutorialCard()
  } else {   
    playerStory.triggerFight('swipe')
    showEnemyMoveCard()
  }
}

function harden() {
  if (playerStory.player.tutorialComplete) {
    showEndTutorialCard()
    playerStory.triggerFight('swipe')
    showEnemyMoveCard()
  } else {   
    playerStory.triggerFight('harden')
    showEnemyMoveCard()
  }
}
function ability() {
  if (playerStory.player.tutorialComplete) {
    showEndTutorialCard()
    playerStory.triggerFight('swipe')
    showEnemyMoveCard()
  } else {   
    playerStory.triggerFight('ability')
    showEnemyMoveCard()
  }
}

// Card
function startIntro() {
  hide(loadEgg)
  hide(pikpakpo)
  hide(pokeballBtn)
  hide(skipIntroBtn)
  show(bgStripe)
  show(profOak)
  show(oaksMsg)
  show(oaksMsgBox)
}

function showBattleCard() {
  hide(openingCard)
  hide(playAgainCard)
  hide(screen)
  show(battleCard)
}

function showEnemyMoveCard() {
  hide(battleCard)
  show(enemyMoveCard)
  changeEnemyText()
}

function showPlayAgainCard() {
  hide(enemyMoveCard)
  show(screen)
  show(playAgainCard)
}

function showOpeningCard() {
  hide(screen)
  hide(playAgainCard)
  show(showBattleCard)
}

function showEndTutorialCard() {
    if(playerStory.player.tutorialsDone < 1) {
      playerStory.player.tutorialsDone += 1
      hide(battleCard)
      hide(winEnemyText)
      hide(winPlayerText)
      summonOak()
      cardText.innerText =  `Hold up! I think you are ready to take on the world. Are you with me?`
      nextMoveOak.innerText = 'Yah!'  
      show(tutorialCard)
    } else {
      return;
    }
  
}

function changeEnemyText() {
  enemyPokemonText.innerHTML = `${playerStory.gymleader.pokemon.pokemon.toUpperCase()}`
  enemyMove.innerHTML = `${playerStory.gymleaderMove.toUpperCase()}`
  playerPokemon.innerHTML = `${playerStory.player.pokemon.pokemon.toUpperCase()}`
}

function updateDialog(poke) {
  enemyPokemonText.innerText =  poke.pokemon.toUpperCase()
  enemyMove.innerText = poke.move.toUpperCase()
  playerPokemon.innerText = playerStory.player.pokemon.pokemon.toUpperCase()
}

// Player
function updatePlayerSprite(pokemon) {
  playerSprite.alt = pokemon
  playerSprite.src = `assets/pokemon/${pokemon}.png`
}

function updatePokedex(player) {
  var name = player.name.toUpperCase()
  var pokemon = player.pokemon.pokemon.toUpperCase()
  var wins = player.wins
  playerInfo.innerHTML = `<h2>${name}</h2> <p>${pokemon}</p> <p>Wins: ${wins}</p> `
}


// Game 
function updateHeader() {
  trainerName.innerText = playerStory.player.name.toUpperCase()
}

function checkForSave() {
  localStorage.length === 1 ? show(loadEgg) : hide(loadEgg)
}


function saveGame() {
  playerStory.player.saveWinsToStorage() 
  show(savedMsg) 
}

function loadGame() {
  count = 20
  var parsedData = JSON.parse(localStorage.getItem('trainer'))
  playerStory = new Game(parsedData.name, parsedData.pokemon)
  playerStory.player.retrieveWinsFromStorage()
  playAgainMove.innerText = `Try again!`
  updatePlayerSprite(playerStory.player.pokemon.pokemon)
  loadContent()
  updateHeader()
  updatePokedex(playerStory.player)
  summonCaterpie()
}

function loadContent() {
  hide(introPage)
  hide(tutorialUser)
  hide(enemyPokemonTutorialSprite)
  hide(loadEgg)
  hide(skipIntroBtn)
  hide(pikpakpo)
  show(enemyCardContent)
  show(tutorialCard)
  show(enemyCard)
  show(gymleaderCard)
  show(footer) 
  show(header)
  show(potionSlot)
  show(userInfo)
  show(showcase)
}

// Health Bar Mechanic
function takeDamage() {
  playerStory.player.hp === 3 ? playerHpFull.classList.remove('green-bar') : 
  playerStory.player.hp === 2 ? playerHpTwoThird.classList.remove('green-bar') : 
  playerStory.player.hp === 1 ? playerHpOneThird.classList.remove('green-bar') : 
  !playerStory.player.hp ? (outcomeMsg.innerHTML = `GAME OVER`, refillHP(player)) : null
}

function giveDamage() {
  playerStory.gymleader.hp === 3 ? enemyHpFull.classList.remove('green-bar') :
  playerStory.gymleader.hp === 2 ? enemyHpTwoThird.classList.remove('green-bar') :
  playerStory.gymleader.hp === 1 ? (enemyHpOneThird.classList.remove('green-bar'), outcomeMsg.innerHTML = `GAME OVER`, refillHP(gymleader), rotateEnemy()) :
  null
}

function usePotion() {
  playerStory.player.takePotion()
  playerHpFull.classList.add('green-bar') 
  playerHpTwoThird.classList.add('green-bar') 
}

function refillHP(trainer) {
  playerStory.trainer.getFullHeal() 
  if (trainer === 'player') {
    playerHpFull.classList.add('green-bar') 
    playerHpTwoThird.classList.add('green-bar') 
    playerHpOneThird.classList.add('green-bar') 
  } else {
    enemyHpFull.classList.add('green-bar') 
    enemyHpTwoThird.classList.add('green-bar') 
    enemyHpOneThird.classList.add('green-bar')
  }

}
// Pokemon Enemies 
function rotateEnemy() {
  var pokemon = [{
    pokemon: 'raichu,',
    move: 'thunder bolt'
  }, {
    pokemon: 'staryu',
    move: 'splash'
  }, {
    pokemon: 'abra',
    move: 'teleport'
  }]

  var enemyChoice = Math.floor(Math.random() * (4 - 1)) + 1
  pokemonDo.innerText = pokemon[enemyChoice].pokemon.toUpperCase()
  enemyPokemonSprite.src = `/assets/pokemon/${pokemon.pokemon}.png`
  enemyPokemonSprite.alt = pokemon.pokemon
  return enemyChoice === 1 ? playerStory = new Game(misty,pokemon[0]) : 
         enemyChoice === 2 ? playerStory = new Game(brock, pokemon[1]) :
         enemyChoice === 3 ? playerStory = new Game(sabrina, pokemon[2]) : null
  }

// Helper Function 
function hide(e) {
  e.classList.add('hidden')
}

function show(e) {
  e.classList.remove('hidden')
}



