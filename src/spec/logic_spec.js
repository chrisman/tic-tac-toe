var logic = require('../js/logic')

describe('Logic', function(){
  it('should say hello world!', function(){
    expect(logic.helloworld()).toEqual('Hello World!')
  })
})

describe('inputIsValid', function(){
  xit('should accept input that is an array', function(){
    expect(logic.inputIsValid([2])).toEqual(true)
    expect(logic.inputIsValid("hello")).toEqual(false)
    expect(logic.inputIsValid(34)).toEqual(false)
    expect(logic.inputIsValid({"han": "solo"})).toEqual(false)
  })
  xit('should accept an array of length === 2', function(){
    expect(logic.inputIsValid([2])).toEqual(false)
    expect(logic.inputIsValid([2,2])).toEqual(true)
    expect(logic.inputIsValid(["hello", "goodbye"])).toEqual(true)
    expect(logic.inputIsValid([1, 2, 3])).toEqual(false)
  })
  it('should only accept an array of arrays', function(){
    expect(logic.inputIsValid([2,2])).toEqual(false)
    expect(logic.inputIsValid([[0],[10]])).toEqual(true)
  })
  it('should accept a range of 0 - 3 for array 0', function(){
    expect(logic.inputIsValid([[2],[2]])).toEqual(true)
    expect(logic.inputIsValid([[-1],[2]])).toEqual(false)
    expect(logic.inputIsValid([[9],[10]])).toEqual(false)
  })
  it('should accept a range of 0 - 15 for array 1', function(){
    expect(logic.inputIsValid([[2],[2]])).toEqual(true)
    expect(logic.inputIsValid([[3],[-1]])).toEqual(false)
    expect(logic.inputIsValid([["4"],[16]])).toEqual(false)
    expect(logic.inputIsValid([[0],[20]])).toEqual(false)
  })
})

describe('A legal move', function(){
  it('is any free space on the board', function(){
    logic.gamestateReset()
    expect(logic.moveIsLegal([[0],[2]])).toEqual(true)
  })
  it('is not an occupied space', function(){
    logic.gamestateReset()
    logic.gamestate[1][2] = 1
    expect(logic.moveIsLegal([[1],[2]])).toEqual(false)
  })
})

describe('Move', function(){
  it('should occupy a space on the board with a player\'s marker.', function(){
    logic.gamestateReset()
    logic.playerMove(1, [[0],[1]])
    expect(logic.gamestate).toEqual([
      [0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
    ])
  })
})
