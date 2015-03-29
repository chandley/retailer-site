$(document).ready(function() {
  console.log("ready!");
  $('#pick_item').click(function(){
    $('#count').html('1 item')
  })  
  $('#remove_item').click(function(){
    $('#count').html('0 items')
  })  
})

