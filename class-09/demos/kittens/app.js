'use strict';

// =============== form stuff =====================

var signupForm = document.getElementById('user-signup');

signupForm.addEventListener('submit', function(eventPotato){
  eventPotato.preventDefault(); // NEW and SUPER necessary for form events
  // preventDefault prevents the default behavior of any event, for a form that prevents the refresh


  console.log(eventPotato);

  // Other thing you need to know, GETTING data from the form
  //event.target.<name of input>.value // the only dynamic piece is name of input
  console.log(eventPotato.target);

  // if i want the value of the name input
  // I need to know <name of input> ::: `username`
  console.log('eventPotato.target.username.value', eventPotato.target.username.value);

  //age name of input::: user-age
  console.log('eventPotato.target[\'user - age\'].value', eventPotato.target['user-age'].value);

  console.log('eventPotato.target.date.value', eventPotato.target.date.value);


  console.log('eventPotato.target[\'color-picked\'].value', eventPotato.target['color-picked'].value);
});



// ============= make a new cat ==========

var kittenForm = document.getElementById('adopt-kitten');

kittenForm.addEventListener('submit', makeACat);



function makeACat(event){
  event.preventDefault();
  // What are the things I need to make a kitten?
  // name color thingSheLikes (array)

  var catName = event.target.name.value;
  var catColor = event.target.catColor.value;
  var first = event.target.firstThing.value;
  var second = event.target.secondThing.value;
  var third = event.target.thirdThing.value;
  var likesArray = [first, second, third];

  // get those things, pass them into my constructor

  var newCat = new Kitten(catName, catColor, likesArray);
  console.log(newCat);
  // render that cat in the table

  newCat.renderAsTable();
}

// 1. make a form
// 2. make an input for each parameter for the constructor (with a name attribute)
// 3. add the callback to the form with addEvent Listener
// 4. callback definition
// 5. preventDefault
// 6. get the content of the inputs
// target the form, target the name of the input, get the value
// event.target.<input name>.value
// 7. pass them to the constructor to make a new object
// 8. render the new stuff using the new object(a row of the store)



function Kitten(name, color, thingsSheLikes){
  this.name = name;
  this.color = color;
  this.thingsSheLikes = thingsSheLikes;

  this.wakeUp = function () {
    var parent = document.getElementById('alarms');
    var child = document.createElement('li');
    child.textContent = this.name + ' the ' + this.color + ' is ' + this.age + ' cat years old, wake up and give her food';
    parent.appendChild(child);
  };
  this.renderLikes = function() {
    for (var i = 0; i < this.thingsSheLikes.length; i++) {
      var tofuLikesList = document.getElementById('tofu-likes');
      var tofuLikesItem = document.createElement('li');
      tofuLikesItem.textContent = this.thingsSheLikes[i];
      tofuLikesList.appendChild(tofuLikesItem);
    }
  };
  this.renderAsTable = function() {
    // 1. find the target
    var table = document.getElementById('cats');
    // 2. create new element
    var row = document.createElement('tr');
    // 2.5 give it content
    // content for a row is a cell
    // do the full 3 step process for a cell
    // cell 1. find parent DONE because `var row` is the parent
    // cell 2. make element
    var tableHeadCell = document.createElement('th');
    // cell 2.5 - give content (name of cat)
    tableHeadCell.textContent = this.name;
    // cell 3- append cell to parent (row)
    row.appendChild(tableHeadCell);


    for (var i = 0; i < 4; i++) {
      var tableDataCell = document.createElement('td');
      tableDataCell.textContent = this.thingsSheLikes[i];
      row.appendChild(tableDataCell);
    }





    // 3. append it
    table.appendChild(row);
  };
}


var garf = new Kitten('garfield', 'blue', ['lasagna', 'dinosaurs']);
garf.renderAsTable();



// =============== old stuff ==============
var tofu = {
  name: 'tofu',
  color: 'brown',
  pretty: true,
  age: 10,
  thingsSheLikes :['eating food', 'sniffing fresh air', 'loafing', 'be the alpha'],
  wakeUp: function () {
    var parent = document.getElementById('alarms');
    var child = document.createElement('li');
    child.textContent = this.name + ' the ' + this.color + ' is ' + this.age + ' cat years old, wake up and give her food';
    parent.appendChild(child);
  },
  renderLikes: function(){
    for(var i = 0; i < this.thingsSheLikes.length; i++){
      var tofuLikesList = document.getElementById('tofu-likes');
      var tofuLikesItem = document.createElement('li');
      tofuLikesItem.textContent = this.thingsSheLikes[i];
      tofuLikesList.appendChild(tofuLikesItem);
    }
  },
  renderAsTable : function(){
    // 1. find the target
    var table = document.getElementById('cats');
    // 2. create new element
    var row = document.createElement('tr');
    // 2.5 give it content
    // content for a row is a cell
    // do the full 3 step process for a cell
    // cell 1. find parent DONE because `var row` is the parent
    // cell 2. make element
    var tableHeadCell = document.createElement('th');
    // cell 2.5 - give content (name of cat)
    tableHeadCell.textContent = this.name;
    // cell 3- append cell to parent (row)
    row.appendChild(tableHeadCell);


    for(var i = 0; i < 4; i++){
      var tableDataCell = document.createElement('td');
      tableDataCell.textContent = this.thingsSheLikes[i];
      row.appendChild(tableDataCell);
    }





    // 3. append it
    table.appendChild(row);
  }
};

tofu.renderLikes();
tofu.renderAsTable();
