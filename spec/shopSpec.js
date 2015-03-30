var Shop = require('../public/js/shop')
describe("Shop", function(){
  var shop;

  beforeEach(function(){
    shop = new Shop()
  });

  it("starts off empty", function() {
    expect(shop.products.length).toEqual(0)
  });

  it("can add a product", function() {
    shop.add('product')
    expect(shop.products).toContain('product')
  });
  
})
