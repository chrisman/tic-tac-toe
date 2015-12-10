var $ = require('jquery')

$(document).ready(function(){
  console.log('show time');

  $('#pvpo').click(comingsoon)
  $('#pvc').click(comingsoon)

  function comingsoon(){
    alert('coming soon')
  }
})
