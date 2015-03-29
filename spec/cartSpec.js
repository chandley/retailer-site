var Cart = require('../public/js/cart')
describe("Cart", function() {

  var cart;
  

  beforeEach(function(){
    cart = new Cart()
  });

  it("starts off empty", function() {
    expect(cart.productCount()).toEqual(0)
  });

  it("can add a product", function() {
    cart.add('product')
    expect(cart.products).toContain('product')
  });
  
});  

