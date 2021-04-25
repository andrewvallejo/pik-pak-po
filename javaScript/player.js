class Player {
  constructor(player, pokemon) {
    this.name = player
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

