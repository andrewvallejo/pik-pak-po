class Player {
  constructor(trainer, pokemon) {
    this.name = trainer
    this.token = '🙂'
    this.badges = []
    this.wins = 0
    this.pokemon = pokemon
    this.tutorialComplete = false 
   }
  saveWinsToStorage() {
   localStorage.setItem('wins', this.wins)
  }
  retrieveWinsFromStorage() {
    return localStorage.getItem('wins')
  }
  checkTutorialWins() {
    if (this.wins >= 3 && !this.tutorialComplete) {
      showEndTutorialCard()
      this.tutorialComplete = true
    }
  }
  updateWins() {
    this.wins++
  }
  startRealGame() {
    if (this.tutorialComplete) {
      this.wins = 0 
    }
  }
}

