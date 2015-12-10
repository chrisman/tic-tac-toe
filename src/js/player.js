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
