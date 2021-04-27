class Player {
  constructor(trainer, pokemon) {
    this.name = trainer
    this.token = '🙂'
    this.badges = []
    this.wins = 0
    this.hp = 3
    this.pokemon = pokemon
    this.tutorialComplete = false 
   }
  saveWinsToStorage() {
   var trainerData = JSON.stringify(this)
   localStorage.setItem('trainer', trainerData)
  }
  saveGame() {
    var trainerData = JSON.stringify(this)
    localStorage.setItem('trainer', trainerData)
   }
  loadGame() {
    var trainerData = JSON.stringify(this)
  }
  retrieveWinsFromStorage() { 
    var parsedData = JSON.parse(localStorage.getItem('trainer'))
    return parsedData.wins
  }
  checkTutorialWins() {
    if (this.wins >= 2 && !this.tutorialComplete) {
      this.tutorialComplete = true
    }
  }
  updateWins() {
    this.wins += 1
    saveWinsToStorage() 
   }
 
 }


