exports.command = function (selector, value) {
    return this
      .waitForElementVisible(selector, 3000, function(){})
      .setValue(selector, value, function(){
          console.log("set val " + value + " into element " + selector)
      })
       
  }
  