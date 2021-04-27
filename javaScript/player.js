class Player {
  constructor(trainer, pokemon) {
    this.name = trainer
    this.token = '🙂'
    this.badges = []
    this.wins = 0
    this.hp = 3
    this.pokemon = pokemon
    this.tutorialComplete = false 
    this.trainerData = JSON.stringify(this)
   }
  saveWinsToStorage() {
   localStorage.setItem('trainer', this.trainerData)
  }
  
  retrieveWinsFromStorage() { 
    var parsedData = JSON.parse(localStorage.getItem('trainer'))
    this.name = parsedData.name
    this.badges = parsedData.badges
    this.wins = parsedData.wins
    this.pokemon = parsedData.pokemon
    this.tutorialComplete = true
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


