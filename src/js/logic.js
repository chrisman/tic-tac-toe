var singleBoardWinCondition = [
  [1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1],
  [1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0],
  [0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0],
  [0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0],
  [0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1],
  [1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],
  [0,0,0,1,0,0,1,0,0,1,0,0,1,0,0,0]
]

module.exports = {
  gamestateReset: function(){
    this.gamestate = [
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
    ]
    return
  },
  helloworld: function(){
    return "Hello World!"
  },
  inputIsValid: function(move){
    return (
      Array.isArray(move)
      && move.length === 2)
      && move.every( e => Array.isArray(e)
      && (move[0] >= 0 && move[0] <= 3)
      && (move[1] >= 0 && move[1] <= 15)
    )
  },
  moveIsLegal: function(move) {
    return (this.gamestate[move[0]][move[1]] === 0)
      ? true
      : false
  },
  playerMove: function(mark, move){
    this.gamestate[move[0]][move[1]] = mark
    return
  },
  normalize: function(mark){
    return this.gamestate.map(i => {return i.map(i => { return (i === mark) ? 1 : 0})})
  },
  checkIfWon: function(mark) {
    return
  },
  arrayEquals: function(a1, a2) {
    return (a1.every(function(curr, idx){
      return curr === a2[idx]
    }))
  }
}
