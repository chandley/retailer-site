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
    
  })  
  


});
