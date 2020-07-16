'use strict';

var clicker = document.getElementById('click-me');
var mouseovererElement = document.getElementById('mouseover-me');
var dblclickerPTag = document.getElementById('dblclick-me');


// We LISTEN for an event

// adding an event listener - a function that fires off when javascript HEARS an event take place

clicker.addEventListener('click', function(){ // this is an inline, anonymous function
  console.log('you clicked me');
  if(clicker.className !== 'orange'){
    clicker.className = 'orange';

  } else {
    clicker.className = 'potato';
  }
});

// DOMELEMENT.addEventListener('EVENT_TYPE', <function that gets called back to later>)
// DOMELEMENT.addEventListener('EVENT_TYPE', CALLBACK_FUNCTION)

function popUpAlert(){
  setTimeout(function(){
    console.log('stop mousing over that p tag');

  }, 1000);
}

// mouseovererElement.addEventListener('mouseover', popUpAlert);

dblclickerPTag.addEventListener('dblclick', function(eventPotato){
  console.log('it was clicked on');
  console.log(eventPotato.target);

  eventPotato.target.className = 'small';
});


var section = document.getElementById('three-paragraphs');

function clickOnOneOfThree(event){
  console.log(event);
  console.log(event.target);
  console.log(event.target.textContent);
}

section.addEventListener('click', clickOnOneOfThree);


/*
Paul - beeper - event (physical event)
marchael - info about the event (event object)

matthew - listener - listens for the beep (new js, the listener)
mike - puts stars - callback function ( the callback function)


paul beeps
Marchael figure out what happened - guess which note paul beeped - A# C D E Gflat - high low
matt - call mike and tell him an event happened, pass marchael to paul
marchael you will tell mike
mike you qill put a star on the page vertically at the same highness of the beep
*/



