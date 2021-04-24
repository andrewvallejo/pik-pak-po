class Player {
  constructor(player) {
    this.name = player.name
    this.badges = []
    this.battlesWon = 0
    this.pokemon = player.pokemon
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

