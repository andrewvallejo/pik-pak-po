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
    if (this.wins >= 2 && !this.tutorialComplete) {
      this.tutorialComplete = true
    }
  }
  updateWins() {
    this.wins += 1
  }
 
  }


