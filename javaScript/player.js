class Player {
  constructor(player) {
    this.name = player
    this.badges = []
    this.battlesWon = 0
  }
  saveWinsToStorage() {
   localStorage.setItem('wins', this.battlesWon)
  }
  retrieveWinsFromStorage() {
    return localStorage.getItem('wins')
  }
  takeTurn(player) {
    
  }
}

