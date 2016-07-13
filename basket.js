

var basket = {
  items: [],

  subtotal: function(basketContents){
    var total = 0;

    for (var i = 0; i < basketContents.length; i++) {
      total += basketContents[i].price
    }
    return total;
  },

  membershipActive: function(membershipObject){
    if(membershipObject['membershipActive'] == true){
      return true
    }else{
      return false
    }
  },

  applyBogoff: function(){
    var sortedItems = this.items.slice().sort();
    var results = [];
    var i = 0;
    arrLength = sortedItems.length - 1;

    for( var item of sortedItems){
      if(i != arrLength){

        if(sortedItems[i + 1].name != sortedItems[i].name){
          results.push(sortedItems[i]);
        }

      }else{
        results.push(sortedItems[i]);
      }
        i++;
    }

    return results;
  },

  findItem: function(itemName){
    for( var item of sortedItems){
      if(item.name === itemName){
        return item
      }
    }
  },

  isEven: function(n) {
     return n % 2 == 0;
  },

  // applyBogoff: function(){
  //   var sortedItems = this.items.slice().sort();
  //   var results = [];
  //   var subResults = {};
  //   var i = 0;


  //   for( var item of sortedItems){
  //     if(subResults[item.name]){
  //       subResults[item.name] += 1;
  //     }else{
  //       subResults[item.name] = 1;
  //     }

  //   }
  //   for (var key in subResults){
  //     if(isEven(subResult[key])){
  //       console.log(subResults[key])
  //       var value = subResult[key] / 2;
  //       subResult[key] = value
  //     }else{
  //       subResult[key] = (subResult[key] + 1) / 2
  //     }


  //     for (var i = 0; i < subResult[key]; i++) {
  //     results.push(findItem(subResults[key]))
  //     }
  //   }

  //   console.log(results)
  //   return results
  // },

  total: function(membershipObject){
    if(this.items.length === 0){
      return 0;
    }

    var total = 0
    var basketContents = this.applyBogoff()


    if(basketContents.length > 0){
      if(this.subtotal() > 20){
        total = this.subtotal() * 0.9;
      }else{
        total = this.subtotal();
      }
    }

    if(membershipActive()){
      total = total * 0.95;
    }

    return total()
  },

  add: function(name, price){
    var item = {
      name: name,
      price: price
    }
    this.items.push(item)
  },

  remove: function(item_name){
    if(this.items.length === 0){
      return
    }

    for (var i = 0; i < this.items.length; i++) {
      if(this.items[i].name == item_name){
        this.items.splice(i, 1);
      }
    }
  }

}

module.exports = basket;