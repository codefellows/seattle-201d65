'use strict';

/*
- Stores the min/max hourly customers, and the average cookies per customer, in object properties
    - Put multiple properties, one for each of the things mentioned above in an object for each store (Seattle);
- Uses a method of that object to generate a random number of customers per hour. Objects/Math/random
    - inside the object, give it a function that generates random customers for one single hour
- Calculate and store the simulated amounts of cookies purchased for each hour at each location using average cookies purchased and the random number of customers generated
    - do math (using customers and cookies) 14 times / amount of hours each day, and store them in an array
- Store the results for each location in a separate array… perhaps as a property of the object representing that location
- Display the values of each array as unordered lists in the browser
- Calculating the sum of these hourly totals; your output for each location should look like this:

Seattle

 - 6am: 16 cookies
- 7am: 20 cookies


1. make an object
2. give it properties (inside the curly braces), found on lab page
3. give it another property that is a function for customers per hour
4. Make a random number in that property between max and min
5. do cookie customer math 14 times
6. take the result of cookie customer math and put it in an array THAT BELONGS TO the store, (not one just defined in the function, but a property of seattle)
  6.5 - we need a property on our object to store the sales

7... - display and calculate
*/

var limaStore = {
  minCustomers : 2,
  maxCustomers : 16,
  averageCookiePerCustomer : 4.6,
  cookieArray : [],

  produceRandomCustomersPerHour : function(){
    var myRandomNum = getRandomIntInclusive(this.minCustomers, this.maxCustomers);
    return myRandomNum;
  },

  produceCookiesSoldAllDay : function(){
    for(var i = 0; i < 14; i++){
      // works once
      var cookiesSoldThisHour = this.produceRandomCustomersPerHour() * this.averageCookiePerCustomer;
      var roundedCookies = Math.floor(cookiesSoldThisHour);

      this.cookieArray[i] = roundedCookies;
      // this.cookieArray.push(roundedCookies);
      // done with once
    }
  },

  renderToPage : function(){
    // target - ul
    // new element - li
    // give it content - this.cookieArray[0] + cookies : 6am
    // append to the ul

    // should be looped 14 times

    // target - ul
    // new element - li
    // give it content - total : + this.calculateTotal()
    // append to the ul
  },

  calculateTotal : function(){
    // adds everyting in the this.cookieArray
    // return it
  }


};

limaStore.produceCookiesSoldAllDay();



// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
}




// customersThishour - do it once
// customersEveryHour- do it 14 times
