'use strict';

/*
  guessing game about ginger

  is ginger a dog (y/n)
    if they answer y - "correct"
    else - "well its not a cat"

  Does Nicholas love Ginger? (y/n)
    if y- "of course, she's my baby"
    if n -"you monster!"
    else - "Quit messing around"

  How old is she? (2)
    if 0 - shes definitely older
    if 1 or 3- almost there
    if 2 - yep!
    if 4 - not close
    else - not even in the ballpark
*/

var gingerIsADogAnswer = prompt('Is Ginger a dog (y/n)');

if(gingerIsADogAnswer === 'y'){
  alert('correct');
} else {
  alert('well its not a cat');
}

var lovingGingerAnswer = prompt('Does Nicholas love Ginger? (y/n)');

if(lovingGingerAnswer === 'y' || lovingGingerAnswer === 'yes' || lovingGingerAnswer === 'yeppers'){
  alert('of course, she\'s my baby');
} else if(lovingGingerAnswer === 'n' ){
  alert('you monster!');
} else if(lovingGingerAnswer === 'maybe'){
  alert('no, I do');
} else {
  alert('Quit messing around');
}

// } else if('n'){ - this checked if 'n' was truthy - boils down almost to does it exist

var gingerAgeAnswer = prompt('How old is she?');

switch(gingerAgeAnswer){
case 'two':
  alert('yeppers!');
  break;
case 'zero':
  alert('shes definitely older');
  break;
case 'one':
  alert('almost there');
  break;
case 'three':
  alert('almost there');
  break;
default:
  alert('not even in the ballpark');

}


