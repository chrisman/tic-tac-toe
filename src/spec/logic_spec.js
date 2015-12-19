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
