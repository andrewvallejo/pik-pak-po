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
  
  retrieveWinsFromStorage() { 
    var parsedData = JSON.parse(localStorage.getItem('trainer'))
    this.name = parsedData.name
    this.badges = parsedData.badges
    this.wins = parsedData.wins
    this.pokemon = parsedData.pokemon
    this.tutorialComplete = true
    console.log(this)
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


