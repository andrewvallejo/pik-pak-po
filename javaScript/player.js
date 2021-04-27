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
    this.updateProfile(parsedData)
    console.log(this)
  }

  updateProfile(player) {
    this.name = player.name
    this.badges = player.badges
    this.wins = player.wins
    this.pokemon = player.pokemon
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



