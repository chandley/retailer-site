var Product = require('../public/js/product')
describe("Product", function() {
  var dreamcoat;

  beforeEach(function(){
    dreamcoat = new Product('Dreamcoat',100,'mens clothing')
  })

  it("has a name", function() {
    expect(dreamcoat.name).toEqual('Dreamcoat')
  });

  it("has a price", function() {
    expect(dreamcoat.price).toEqual(100)
  });

  it("has a category", function() {
    expect(dreamcoat.category).toEqual('mens clothing')
  });
  
});
