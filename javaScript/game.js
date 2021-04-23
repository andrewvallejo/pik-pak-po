class Game {
  constructor() {
   this.player = new Player('Ash')
   this.gymleader = new Player('Misty')
   this.playerMove = ''
   this.gymleaderMove = ''
    //A Game should include:
// Two Player instances
// A way to keep track of the data for the game board
// A way to detect when a game is a draw (no one has won)
// A way to reset the Game’s board to begin a new game
  }
  updatePlayerMove(move) {
    this.playerMove = move
    console.log('hopeful')
  }
  compareMove(playerMove, gymleaderMove) {
    if(playerMove === 'swipe' ) {

    }
  }
}
