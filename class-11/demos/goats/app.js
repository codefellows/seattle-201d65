/*

Show the goats, allow users to vote by click, after X clicks, show the results as a list

define a variable called goatsArray = [];

Goat : define a constructor (for the goat image)
  - liveClicks: keep track of clicks
  - imageName : 'Floating Goat'
  - imageSrc : 'floating-goat.jpg'
  - push `this` into the goatsArray

  - TODO: day 13: lifetimeClicks: clicks from past iterations

Instantiate Goat objects


Goat.prototype.renderGoatAsHtml() : Render a goat to the page ( so it can be clicked on)
  - with text (p)
  - with an alt attribute for alt text (name of the goat image)
  - target a ul
  - make a li
  - make an image - give it a src and alt
  - append it to the li
  - make a p tag - gibve it text (of name)
  - append it to li
  - append li to ul
  - TODO: add an id that references the Goat instance in the js
    - the id could be goat name without spaces, the index of the object


event listener on the img tags with type click and an event handler
event handler :
  - add 1 to the clicks of the goat image we clicked on
    - TODO: check if the image's `src` attribute matches the object
  - showClicks
  - display 2 new goat images (displayGoats())

displayGoats() : display 2 new goat images
  - pick 2 goats - randomly based on array indexes
  - make the other 2 go away (like our table from salmon cookies);
  - display them (renderGoatAsHtml());



showClicks() :show the clicks per goat live (live || after X clicks (at the end))
  - show them in a list
  - use the constructor's instances for the info

CSS:
  - set all image height and width the same

HTML



TODO: on day 13 we will differentiate between live clicks and stored clicks
*/





//================= Global vars ===================
var goatsArray = [];
var totalClicks = 0;


// ================= Function Definitions =================
function Goat(imageName, src){
  this.liveClicks = 0;
  this.imageName = imageName;
  this.imageSrc = src;

  goatsArray.push(this);
}

Goat.prototype.renderGoatAsHtml = function() {
  var target = document.getElementById('list-of-goats');
  var goatHomeLi = document.createElement('li');

  var goatImg = document.createElement('img');
  goatImg.src = this.imageSrc;
  goatImg.alt = this.imageName;
  goatHomeLi.appendChild(goatImg);

  var goatTextP = document.createElement('p');
  goatTextP.textContent = this.imageName;
  goatHomeLi.appendChild(goatTextP);

  target.appendChild(goatHomeLi);
};

function handleClickOnGoat(event) {
  console.log(event.target);
  // event delegation
  // with event delegation we can put an if conditional to only trigger the code inside the event handler if the right thing is clicked on
  if (event.target.tagName === 'IMG') {
    // increment total clicks
    totalClicks++;

    // increment goat clicks
    for (var goatIndex = 0; goatIndex < goatsArray.length; goatIndex++) {
      if (goatsArray[goatIndex].imageSrc === event.target.getAttribute('src')) {
        console.log('they match');
        goatsArray[goatIndex].liveClicks++;
      }
    }
    //display new goats
    displayGoats();

    if(totalClicks === 10){
      var goatList = document.getElementById('list-of-goats');
      // goatList.innerHTML = '';

      // remove the listener
      listOfGoats.removeEventListener('click', handleClickOnGoat);

    }

  } else {
    console.log('please click an image');
  }
}

// - pick 2 goats - randomly based on array indexes
//   - make the other 2 go away(like our table from salmon cookies);
// - display them(renderGoatAsHtml());
function displayGoats(){
  // get 2 goat indexes
  var index1 = Math.floor(Math.random() * goatsArray.length);
  var index2 = Math.floor(Math.random() * goatsArray.length);

  var newGoat1 = goatsArray[index1];
  var newGoat2 = goatsArray[index2];
  // TODO: make that random

  var goatList = document.getElementById('list-of-goats');
  goatList.innerHTML = '';
  newGoat1.renderGoatAsHtml();
  newGoat2.renderGoatAsHtml();
}



// ================ Function calls =================
// event listener on the img tags with type click and an event handler
// event handler:
// - add 1 to the clicks of the goat image we clicked on
//   - TODO: check if the image's `src` attribute matches the object
//     - showClicks
//     - display 2 new goat images(displayGoats())

var listOfGoats = document.getElementById('list-of-goats');
listOfGoats.addEventListener('click', handleClickOnGoat);






new Goat('Sweater Goat', 'images/sweater-goat.jpg');
new Goat('Cruisin Goat', 'images/cruisin-goat.jpg');
new Goat('Float Goat', 'images/float-your-goat.jpg');
new Goat('Smiling Goat', 'images/smiling-goat.jpg');
// new Goat('Kiss Goat', 'images/kissing-goat.jpg');
// new Goat('Sassy Goat', 'images/sassy-goat.jpg');
// new Goat('Away Goat', 'images/goat-away-goat.jpg');
// new Goat('Hand Goat', 'images/goat-out-of-hand.jpg');

// goatsArray[0].renderGoatAsHtml();
// goatsArray[1].renderGoatAsHtml();
// goatsArray[2].renderGoatAsHtml();
// goatsArray[3].renderGoatAsHtml();

