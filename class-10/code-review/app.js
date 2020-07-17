'use strict';
/*

forms

*/


// week 1 lab stuff
// ask a question, get a response

var nameForm = document.getElementById('who-am-i');

nameForm.addEventListener('submit', function(event){
  event.preventDefault();
  console.log('Hello, ' + event.target.username.value + ' welcome to the site');
});


var crepesArray = [];

function Crepe (filling, sauce, quantity){
  this.filling = filling;
  this.sauce = sauce;
  this.quantity = quantity;
  this.servings = [];
  crepesArray.push(this);
}

Crepe.prototype.cook = function (){
  for(var i = 0; i < this.quantity; i++){
    this.servings.push(this.sauce + ' crepe with ' + this.filling);
  }
  console.log(this.servings);

  var tableElement = document.getElementById('crepes');
  var rowElement = document.createElement('tr');
  var cellElement = document.createElement('th');
  cellElement.textContent = this.sauce + ' crepe with ' + this.filling;
  rowElement.appendChild(cellElement);

  cellElement = document.createElement('td');
  cellElement.textContent = this.quantity;
  rowElement.appendChild(cellElement);

  tableElement.appendChild(rowElement);
};

new Crepe('caramel', 'bananas', 15);
crepesArray[0].cook();


// form > constructor > calculation > render


var crepeForm = document.getElementById('crepe');

crepeForm.addEventListener('submit', makeCrepe);

function makeCrepe(event){
  event.preventDefault();
  var newCrepe = new Crepe(
    event.target.filling.value,
    event.target.sauce.value,
    event.target.formQuantity.value
  );

  var table = document.getElementById('crepes');
  table.innerHTML = '';

  for(var i = 0; i < crepesArray.length; i++){
    crepesArray[i].cook();
  }

  makeFooter();

  // var t = event.target;
  // var newCrepe = new Crepe(t.filling.value, t.sauce.value, t.formQuantity.value);


}


function makeFooter(){
  var tableElement = document.getElementById('crepes');
  var rowElement = document.createElement('tr');
  var cellElement = document.createElement('th');
  cellElement.textContent = 'Total';
  rowElement.appendChild(cellElement);

  cellElement = document.createElement('td');

  // sum of all quantities
  var sum = 0;
  for(var i = 0; i < crepesArray.length; i++){
    sum = sum + parseInt(crepesArray[i].quantity);
  }


  cellElement.textContent = sum;
  rowElement.appendChild(cellElement);

  tableElement.appendChild(rowElement);
}

makeFooter();
