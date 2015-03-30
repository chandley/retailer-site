$(document).ready(function() {
  var shop = new Shop()
  shopAddStock();

  console.log("ready!");
  $('#add_item').click(function(){
    $('#count').html('1 item')
  })  
  $('#remove_item').click(function(){
    $('#count').html('0 items')
  })
  showShop(shop, '#shop');
})

function loadProduct (shop) {
  shop.add(new Product(''))
}

function showShop(shop, id) {
  $.each(shop.products), function(product) {
    $('#shop').append( '<td>' + product.name + '</td><td>' + product.category + '</td><td>' + product.price + '</td><td></td>')
  }
}

function shopAddStock(product) {
  shop.products.push(new Product( "Flip Flops, Red", "£19.00", "Men's Footwear"));
};


