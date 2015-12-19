module.exports = {
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
  }
}
