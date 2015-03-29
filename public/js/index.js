$(document).ready(function() {
  console.log("ready!");
  $('#add_item').click(function(){
    $('#count').html('1 item')
  })  
  $('#remove_item').click(function(){
    $('#count').html('0 items')
  })  
})

