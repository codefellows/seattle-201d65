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
3. give it another property that is a function
4. Make a random number in that property between max and min
5. do cookie customer math 14 times
6. take the result of cookie customer math and put it in an array THAT BELONGS TO the store, (not one just defined in the function, but a property of seattle)
  6.5 - we need a property on our object to store the sales

7... - display and calculate
*/

