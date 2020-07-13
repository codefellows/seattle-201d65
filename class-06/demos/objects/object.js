var arr = [1, 2, 3]; // array literal
// [value, value, value]

var obj = {
  key: 'value',
  cool: true,
  'key lime': 3.14
};

// we access the values in an object using their keys with object access notation
// the [] after an object or an array are called object access notation when used to retrieve a value
// a key value pair, is also known as a property
console.log(obj['key lime']);

console.log('asdf length', 'asdf'['length']);

// =================== DOT NOTATION ==============

console.log('access notation : ', obj['key']);
console.log('dot notation : ', obj.key);

console.log('access notation : ', obj['cool']);
console.log('dot notation : ', obj.cool);

console.log('access notation : ', obj['key lime']);
// console.log('dot notation : ', obj.key lime); // a space breaks it
// everything in javascript is an object

// {
// key : value,
// key : value.
//}

var a = 'apple';
// a is the variable's key, 'apple' is the value

var arr2 = [11, 2, 3];
// arr2 : [11,2,3]
// arr2[0] === 11
// the key of 0 stores the value of 11


var kindaAnArray = {
  '0': 'apple',
  '1': 'orange',
  '2': 'peach'
};

kindaAnArray[0];

var obj2 = {
  bool: true,
  'number': 99,
  arr: [1, 2, 3],
  innerObj: {
    bool: false
  },
  doTheThing: function () {
    console.log('doing the thing');
  }
};

// -============ Methods ===================
// methods are functions that live in objects
var cat = {
  name: 'snowdrop',
  talk: function () {
    console.log('meow meow MEOW');
  }
};

//calling a method involves typing the object name `.` the method name with parentheses
cat['talk']();
cat.talk();

// document.write();

'asdf'.length;
[1, 2, 3].length;

cat.talk;

var x = 2;
console.log(x);
x = 3;
console.log(x);

console.log(cat.name);
cat.name = 'garfield';
console.log(cat.name);


// ======== this ============

var scooby = {
  name: ' scooby',
  favSnack: 'scooby snack',
  color: 'brown ',
  getSnack: function () {
    console.log(scooby.favSnack + '?');
  },
  introduce: function () {
    console.log('this', this);
    console.log('I am ' + this.name + ' can I have a ' + this.favSnack);
  }
};

scooby.getSnack();
scooby.introduce();

var ASDFLASJKDLFKASLDGJASDLGJASLDFJKLASDFKLAS = {
  cool: true,
  seeHowCoolIAm: function () {
    console.log(this.cool);
  }
};
ASDFLASJKDLFKASLDGJASDLGJASLDFJKLASDFKLAS.seeHowCoolIAm();


