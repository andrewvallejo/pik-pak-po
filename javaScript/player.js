class Player {
  constructor(trainer, pokemon) {
    this.name = trainer
    this.badges = []
    this.battlesWon = 0
    this.pokemon = pokemon
  }
  saveWinsToStorage() {
   localStorage.setItem('wins', this.battlesWon)
  }
  retrieveWinsFromStorage() {
    return localStorage.getItem('wins')
  }
  takeTurn() {
    
  }
}

