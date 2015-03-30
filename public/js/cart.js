function Cart() {
 this.products = []
}


module.exports = Cart;

Cart.prototype.productCount = function() {
  return this.products.length
};  

Cart.prototype.add =
function(product) {
  this.products.push(product( "Flip Flops, Red", "£19.00", "Men's Footwear"));
};

