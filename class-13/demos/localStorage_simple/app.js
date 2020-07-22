'use strict';

// if I want to retrieve or read a value in localStorage I use the method
//localStorage.getItem(KEY)
// it only needs one parameter, the key we stored the value in

var timesBeenOnPage = localStorage.getItem('timesVisited');

timesBeenOnPage++;

// If I want to store something in local Storage, i call the method
// localStorage.setItem(KEY, VALUE)
// it takes 2 parameters, a key and a value

localStorage.setItem('timesVisited', timesBeenOnPage);

var spanElement = document.getElementById('times-visited');

spanElement.textContent = timesBeenOnPage;



// some key values we know

var key = 'value';
var obj = {
  key: 'value'
};

var arr = [9];
// key is index 0 has value of 9

function makeFood(){
  console.log('cooking');
}
// key makeFood has the value of the whole function {
// console.log('cooking')
// }


// ============= Local Storage limitations =================

// local storage has a size limit per site
// each site gets its own storage
// to optimize the storage, the only thing allowed to be stored are strings

var nicholas = {
  teacher: true,
  name : 'nich'
};

localStorage.setItem('teacherStoresWrong', nicholas);
// any time I turn an object into a string with concatenation / loose type conversion, it becomes "[object Object]"

// If storing things that are not strings, I have to make them `stringy`
// javascript has a set notation for objects as strings
// Javascript String Object Notation ::: JSON

'{"teacher" : true, "name" : "nich"}';

var stringyTeacher = JSON.stringify(nicholas);
console.log(stringyTeacher);


var backToTheTeacher = JSON.parse(stringyTeacher);
console.log(backToTheTeacher);


// If I want to put something in local storage
// JSON.stringify(thing)
// localStorage.setItem(KEY, stringyThing);

// If I want to retrieve something that is an object from localstorage
// var retrievedStringyThing = localStorage.getItem(KEY);
// JSON.parse(retrievedStringyThing)


var stringyT = JSON.stringify(nicholas);
localStorage.setItem('teacherStoredRight', stringyT);

var objFromLocalStorage = localStorage.getItem('teacherStoredRight');
console.log('before parse', objFromLocalStorage);
console.log('after parse', JSON.parse(objFromLocalStorage));


// ================ Constructed Objects and their issues =====================

function Dog(name){
  this.name = name;
}

Dog.prototype.greeting = function(){
  console.log('hello sir or madam, I am ' + this.name);
};

var rufus = new Dog('rufus');

console.log('rufus', rufus);
rufus.greeting();

var stringyRufus = JSON.stringify(rufus);
localStorage.setItem('doggy', stringyRufus);

var rufusFromLS = localStorage.getItem('doggy');
var parsedRufusFromLocalStorage = JSON.parse(rufusFromLS);
console.log('parsedRufusFromLocalStorage', parsedRufusFromLocalStorage);
// parsedRufusFromLocalStorage.greeting();

// When I take a stringified Constructed objectthat is a JSON object and turn it back into a javascript object, it `forgets` what constructor it belonged too and loses all prototype methods

// when I stringify an object it loses its knowledge and prototypes because only the key value pairs are kept

// What I can do is called reconstituting
// definition is passing an object back through a constructor

// Dog needs a name, our object has a name

var reconstitutedRufus = new Dog(parsedRufusFromLocalStorage.name);
console.log('reconstituded rufus', reconstitutedRufus);
reconstitutedRufus.greeting();

// ============== another time ====================

function Cat(name, humansScratched){
  this.name = name;
  this.humansScratched = humansScratched;
}

Cat.prototype.brag = function(){
  console.log(this.humansScratched + ': i scratched this many');
};

var snowdrop = new Cat('snowdrop', 0);

snowdrop.humansScratched++;
snowdrop.humansScratched++;
snowdrop.humansScratched++;
snowdrop.humansScratched++;
snowdrop.humansScratched++;

var stringySnow = JSON.stringify(snowdrop);
localStorage.setItem('snowdrop', stringySnow);

var lsSnow = localStorage.getItem('snowdrop');
var parsedSnow = JSON.parse(lsSnow);
console.log('parsed snowdrop: ', parsedSnow);

var reconstitudedSnowdrop = new Cat(parsedSnow.name, parsedSnow.humansScratched, 9, true, false); //completely new
console.log('new Cat snowdrop:', reconstitudedSnowdrop);
reconstitudedSnowdrop.brag();


// =============== Conversion ==========================
/*
 stringified and stored in local storage
 retrieved from local storage and parsed

 we then had to pass our parsed object through the constructor so we would have prototype methods

 EXPECTED BEHAVIOR: snowdrop has 5 scratches
 ACTUAL OUTCOME: snowdrop has 0 scratches
 REASON: the constructor only takes in a name parameter
 RESOLUTION: give the constructor a parameter for scratches (to account for any missing variables)

 EXPECTED BEHAVIOUR: snowdrop has 5 scratches
 ACTUAL OUTCOME: snowdrop has null scratches
 REASON: when snowdrop was originally made, we did not pass in a scratch count because it was not necessary before
 RESOLUTION: update the original constructed instances to pass in the necessary parameters

 it all works
 */
