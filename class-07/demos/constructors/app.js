'use strict';

function makeStudent(food, car, color, from, hobby){
  var student = {
    favoriteFood: food,
    favoriteCar: car,
    favoriteColor: color,
    whereYouFrom: from,
    favoriteHobby: hobby,
    cool: true,
    class: '201d65',
    student: true,
    teacher: 'nicholas',
    greeting: function () {
      console.log('sup');
      2 + 2;
      3 + 3;
    }
  };
  return student;
}

var paul = makeStudent('brats', 'Outback', 'green', 'Saint Lois', 'backpacking');
var mike = makeStudent('salmon', 'volvo 240', 'blue', 'Chicago', 'photography');


console.log(paul, mike);


function Student(food, car, color, from, hobby) {
  console.log('inside constructor,  this :', this);
  this.favoriteFood = food;
  this.favoriteCar = car;
  this.favoriteColor = color;
  this.whereYouFrom = from;
  this.favoriteHobby = hobby;
  this.cool = true;
  this.class = '201d65';
  this.student = true;
  this.teacher = 'nicholas';
  this.greeting = function () {
    console.log('sup');
    2 + 2;
    3 + 3;
  };

  // at the end it gets the prototype functions just because they exist
}





// this add a goToSchool method to the objects made by Student
// prototype just means `list of functions to add later`
Student.prototype.goToSchool = function(){
  console.log('I am going to ' + this.class + ' in my ' + this.favoriteCar);
};

Student.prototype.sayHobby = function(){
  console.log(this.favoriteHobby);
};



// `new` is a keyword used exclusively to call constructor functions
// it is the one and only thing actually differentiating how to run the function for javascript
var jack = new Student('salad', 'volvo', 'turqoise', 'california', 't-shirt making');
var marchael = new Student('sinigang', 'subaru', 'green', 'seattle', 'video games');
console.log(jack, marchael);
jack.greeting();
jack.goToSchool();
jack.sayHobby();

marchael.goToSchool();
marchael.sayHobby();





// an approximation of what is happening under the hood (basically)
// function hybrid (name){
//   var this = {};
//   // this. object type = `hybrid`
//   this.name = name;

// for every function in hybrid . prototype
//    this.functionname = function
// }

// new hybrid('apple');

function Letter(recipient, from, message){
  this.to = recipient;
  this.from = from;
  this.message = message;
}

Letter.prototype.send = function(){
  console.log('To : ' + this.to);
  console.log(this.message);
  console.log('From : ' + this.from);
};

var letterToMom = new Letter('Mom', 'Nich', 'Love ya momma');
letterToMom.send();
var letterToADragon = new Letter('Elsadritch', 'Anonymous', 'sorry for stealin that treasure, I needed the horn of healing to save my sister\'s life');
letterToADragon.send();


// var dog = {
//   name: 'ginger',
//   age: 2,
//   play: function () {
//     console.log('I am ' + this.name + ' want to play?');
//   }
// };

function Dog(name, age){
  this.name= 'ginger';
  this.age = 2;

}

Dog.prototype.play = function () {
  console.log('I am ' + this.name + ' want to play?');
};

var dog = new Dog('ginger', 2);

dog.play();






