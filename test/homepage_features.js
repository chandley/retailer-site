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
        this.mouse.click('#pick_item')
        expect('#cart').to.include.text('1 item');
      })
    });
    
  })  
  


});
