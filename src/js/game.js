var $ = require('jquery')
var player = require('./player')
var logic = require('./logic')

var playerone = new player.Player()
var playertwo = new player.Player()
playerone["name"] = "Player One"
playerone["name"] = "Player Two"

function begin(a, b){
  var players = Array.prototype.slice.call(arguments)

  output(a["name"], " has challenged ", b["name"], " to a game of tic-tac-toe")
  output("The game has begun")

  var p1move = a.getMove(function(){
    var move = $('#p1inputsubmit').click(function(){
      var input = formatInput($('#p1input').val())
      output(logic.inputIsValid(input))
    })
  })
  return
}

function formatInput(s){
  return s.split(',').map(e => e.trim()).map(e => [e])
}

function output(){
  var args = Array.prototype.slice.call(arguments)
  console.log(args.join(''));
  return
}

$(document).ready(function(){
  begin(playerone, playertwo)
})

module.exports = {
  begin: begin,
  output: output
}
