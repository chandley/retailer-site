function Shop() {
  this.products = []
}

module.exports = Shop;

Shop.prototype.add =
function(product) {
  this.products.push(product);
};
