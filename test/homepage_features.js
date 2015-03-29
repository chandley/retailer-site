describe('homepage', function(){
  before(function(){
    casper.start('http://localhost:3000/');
  });

  it('gives a welcome message', function(){
    casper.then(function(){
      expect("body").to.include.text("Welcome to the boutique");
    });
  });

  describe("shopping cart", function() {
    it("user adds an item", function() {
      casper.then(function(){
        expect("#cart").to.include.text("0 items");
        this.mouse.click('#add_item')
        expect('#cart').to.include.text('1 item');
      })
    });
    it("user removes an item", function() {
      casper.then(function(){
        this.mouse.click('#add_item')
        this.mouse.click('#remove_item')
        expect("#cart").to.include.text("0 items");
      });
    });

    it("shows a product name, category and price", function() {
      casper.then(function(){
        expect("#shop").to.include.text("Flip Flops, Red")
        expect("#shop").to.include.text("£19.00")
        expect("#shop").to.include.text("Men's Footwear")
      })
    });
    
    
  })  
  


});
