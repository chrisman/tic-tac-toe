var logic = require('../js/logic')

describe('Logic', function(){
  it('should say hello world!', function(){
    expect(logic.helloworld()).toEqual('Hello World!')
  })
})
