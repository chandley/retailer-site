var express = require('express');
var app = express();
var server = require('http').createServer(app);

var Shop = require('./public/js/shop')
var Product = require('./public/js/product')

var shop = new Shop
shopAddStock();

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

app.get('/', function(request,response){
//  var cart = new Cart
  response.render("index");

});

server.listen(3000, function(){
  console.log("Server listening on port 3000");
});

module.exports = server;

function shopAddStock(product) {
  shop.products.push(new Product( "Flip Flops, Red", "£19.00", "Men's Footwear"));
};
