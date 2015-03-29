function Cart() {
 this.products = []
}


module.exports = Cart;

Cart.prototype.productCount = function() {
  return 0;
};  

Cart.prototype.add =
function(product) {
  this.products.push(product);
};
