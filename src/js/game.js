var player = require('./player')

var playerone = new player.Player()
var playertwo = new player.Player()
playerone["name"] = "Player One"
playerone["name"] = "Player Two"


function begin(a, b){
  var players = Array.prototype.slice.call(arguments)

  output(a["name"], " has challenged ", b["name"], " to a game of tic-tac-toe")
  output("The game has begun")

  console.log(a["getMove"](function(){
    return "The only winning move"
  }))


  return
}

function output(){
  var args = Array.prototype.slice.call(arguments)
  console.log(args.join(''));
  return
}

begin(playerone, playertwo)

module.exports = {
  begin: begin,
  output: output
}
