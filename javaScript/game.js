class Game {
  constructor(trainer, pokemon) {
   this.player = new Player(trainer, pokemon)
   this.gymleader = new Player('Misty', 'raichu')
   this.playerMove = ''
   this.gymleaderMove = ''
   this.winner = ''
   this.playersWins = 0
   this.gymleaderWins = 0
  }


  updateGymleaderMove() {
    var moveChoice = Math.floor(Math.random() * (4 - 1)) + 1
    return moveChoice === 1 ? this.gymleaderMove = 'swipe' : 
    moveChoice === 2 ? this.gymleaderMove = 'harden' :
    moveChoice === 3 ? this.gymleaderMove = 'ability' :
    null 
  }

  triggerFight(move) {
    this.player.checkTutorialWins()
    this.playerMove = move
    this.updateGymleaderMove()
    this.getOutcome()
    this.updateCounter()
  }

  getOutcome() {
    var outcome = this.compareMove(this.playerMove, this.gymleaderMove)
    outcome === 'win' ? (outcomeMsg.innerText = 'You Win!', this.player.wins++ ) :
    outcome === 'lose' ? (outcomeMsg.innerText = 'You Lose!', this.gymleader.wins++) :
    outcome === 'draw' ? outcomeMsg.innerText = 'Draw!': 
    null
  }

  compareMove(playerMove, gymLeaderMove) {
   return playerMove === 'swipe' &&  gymLeaderMove === 'ability' ? 'win': 
          playerMove === 'swipe' && gymLeaderMove === 'harden' ? 'lose' :
          playerMove === 'harden' && gymLeaderMove === 'swipe' ? 'win' :
          playerMove === 'harden' && gymLeaderMove === 'ability' ? 'lose' :
          playerMove === 'ability' && gymLeaderMove === 'harden' ? 'win' : 
          playerMove === 'ability' && gymLeaderMove === 'swipe' ? 'lose' : 
          playerMove ===  gymLeaderMove ? 'draw' :
          null
  }

  updateCounter() {
    enemyWins.innerText = this.gymleader.wins
    playerWins.innerText = this.player.wins
  }
}

