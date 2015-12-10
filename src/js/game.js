module.exports = {

  begin: function(){
    output("Hello", " ", "World", "!")
    return
  },

  output: function(){
    var args = Array.prototype.slice.call(arguments)
    console.log(args.join(''));
    return
  }
}
