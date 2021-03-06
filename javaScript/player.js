class Player {
  constructor(trainer, pokemon) {
    this.name = trainer
    this.token = '🙂'
    this.badges = []
    this.wins = 0
    this.hp = 3
    this.potions = 1
    this.pokemon = pokemon
    this.tutorialComplete = false 
    this.tutorialsDone = 0
   }
   
  saveWinsToStorage() {
    var trainerData = JSON.stringify(this)
    localStorage.setItem('trainer', trainerData)
  }
  
  retrieveWinsFromStorage() { 
    var parsedData = JSON.parse(localStorage.getItem('trainer'))
    this.updateProfile(parsedData)
  }

  updateProfile(player) {
    this.name = player.name
    this.badges = player.badges
    this.wins = player.wins
    this.pokemon = player.pokemon
    this.tutorialComplete = true
    this.tutorialsDone = 1
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

  loseHealth() {
    this.hp -= 1
    }
  
  takePotion() {
    this.hp = 3
    this.potions -= 1
  } 

  gainPotion() {
    this.potions += 1
  }

  updateBadge() {
    this.badges+= 1
  }
 }



