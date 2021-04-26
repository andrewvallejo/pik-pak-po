class Player {
  constructor(trainer, pokemon) {
    this.name = trainer
    this.token = '🙂'
    this.badges = []
    this.wins = 0
    this.pokemon = pokemon
   }
  saveWinsToStorage() {
   localStorage.setItem('wins', this.wins)
  }
  retrieveWinsFromStorage() {
    return localStorage.getItem('wins')
  }
  takeTurn() {
    
  }
}

