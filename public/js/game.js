(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{"./player":2}],2:[function(require,module,exports){
/*
player.js
*/

var defaultObj = {
  name: 'a player',
  attack: 50,
  defense: 30,
  health: 500,
  alignment: 2,
  attacks: [
    {name: "a disapproving look", chance: 0.7, multiplier: 1},
    {name: "a frown and a finger wagging", chance: 0.25, multiplier: 2},
    {name: "a stern talking to", chance: 0.05, multiplier: 6}],
  getMove: function(callback){
    return callback()
  },
  phrases: {
    win: "a triumphant day!",
    lose: "you curr! you scallyway! you scoundral!"
  }
}

module.exports = {
  Player: function(obj){
    obj = (obj === undefined) ? defaultObj : obj
    this.name = obj.name
    this.attack = obj.attack
    this.defense = obj.defense
    this.health = obj.health
    this.attacks = obj.attacks
    this.alignment = obj.alignment
    this.phrases = obj.phrases

    this.getMove = obj.getMove
    return this
  }
}

},{}]},{},[1]);
