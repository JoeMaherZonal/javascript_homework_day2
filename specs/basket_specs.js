var basket = require('../basket')
var assert = require('chai').assert


describe("Shopping Basket", function(){

  beforeEach(function(){
    basket.items = [];
  })

  it('Basket total is 0 when basket empty', function(){
    basket.items = [];
    var membership = {
      membershipActive: true
    }
    assert.equal(0, basket.total(membership))
  })

  it('items = 1 length when add item', function(){
    basket.add("Candle", 2)
    assert.equal(1, basket.items.length)
  })

  it('items = 0 length when remove item candle', function(){
    basket.add("Candle", 2)
    assert.equal(1, basket.items.length)
    assert.equal("Candle", basket.items[0].name)
    basket.remove("Candle")
    assert.equal(0, basket.items.length)
  })

  it('check subtotal adds up correctly', function(){
    basket.add("Candle", 2)
    basket.add("Carrots", 3)
    basket.add("Lamp", 9)
    basket.add("Head Phones", 11)

    assert.equal(25, basket.subtotal(basket.items))
  })

  it('check membership is active', function(){
    var membership = {
      membershipActive: true
    }
    assert.equal(true, basket.membershipActive(membership))
  })

  it('check bogoff with double items', function(){
    basket.add("Candle", 2)
    basket.add("Candle", 2)
    basket.add("Carrots", 3)
    basket.add("Carrots", 3)
    basket.add("Lamp", 9)
    basket.add("Lamp", 9)
    basket.add("Head Phones", 11)
    basket.add("Head Phones", 11)

    results = basket.applyBogoff()

    assert.equal(4, results.length)
  })

})


