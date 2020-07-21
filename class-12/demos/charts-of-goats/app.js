//================= Global vars ===================
var goatsArray = [];
var totalClicks = 0;
var goatIndexesCurrentlyOnThePage = [0, 3];


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
    renderTotals();

    if(totalClicks === 8){
      var goatList = document.getElementById('list-of-goats');
      // goatList.innerHTML = '';

      // remove the listener
      listOfGoats.removeEventListener('click', handleClickOnGoat);

      // also make the chart
      makeMyChart();
      makeMyChart2();

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
  // prevent them from being the same as each other
  //var goatIndexesCurrentlyOnThePage = [0, 3];
  var index1 = Math.floor(Math.random() * goatsArray.length);

  while(index1 === goatIndexesCurrentlyOnThePage[0] || index1 === goatIndexesCurrentlyOnThePage[1]){
    index1 = Math.floor(Math.random() * goatsArray.length);
  }


  var index2 = Math.floor(Math.random() * goatsArray.length);

  while (
    index1 === index2 ||
    index2 === goatIndexesCurrentlyOnThePage[0] ||
    index2 === goatIndexesCurrentlyOnThePage[1]
  ){
    console.log('changing');
    index2 = Math.floor(Math.random() * goatsArray.length);
  }

  var newGoat1 = goatsArray[index1];
  var newGoat2 = goatsArray[index2];
  // TODO: make that random

  var goatList = document.getElementById('list-of-goats');
  goatList.innerHTML = '';
  newGoat1.renderGoatAsHtml();
  newGoat2.renderGoatAsHtml();

  //when I put new goats on the page, update which goats are on the page
  goatIndexesCurrentlyOnThePage = [index1, index2];
}





function renderTotals (){
  var list = document.getElementById('goat-vote-tote');
  list.innerHTML = '';
  for(var i = 0; i < goatsArray.length; i++){

    var li = document.createElement('li');
    li.textContent = goatsArray[i].imageName + ': ' + goatsArray[i].liveClicks;
    list.appendChild(li);
  }
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
new Goat('Kiss Goat', 'images/kissing-goat.jpg');
new Goat('Sassy Goat', 'images/sassy-goat.jpg');
new Goat('Away Goat', 'images/goat-away-goat.jpg');
new Goat('Hand Goat', 'images/goat-out-of-hand.jpg');

// goatsArray[0].renderGoatAsHtml();
// goatsArray[1].renderGoatAsHtml();
// goatsArray[2].renderGoatAsHtml();
// goatsArray[3].renderGoatAsHtml();



// ================= CHARTJS STUFF ===================
function makeMyChart(){
  // goatsArray === [
  // 0: {liveClicks: 2, imageName: 'Smiling 'Goat'},
  // 1:  {liveClicks: 1, imageName: 'Floating Goat}
  // ]
  // GOAL 1 : make a label array
  // var labelArray = [goatsArray[0].imageName, goatsArray[1].imageName, goatsArray[2].imageName, goatsArray[3].imageName];
  var labelArray = [];

  for(var goatIndex = 0; goatIndex < goatsArray.length; goatIndex++){
    labelArray.push(goatsArray[goatIndex].imageName);
  }


  var goatDataArray = [];

  for(var i = 0; i < goatsArray.length; i++){
    goatDataArray.push(goatsArray[i].liveClicks);
  }


  var ctx = document.getElementById('myChart').getContext('2d');
  var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: labelArray,
      datasets: [{
        label: '# of Goat Votes',
        data: goatDataArray,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)'
        ],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  });

}


/// ============================ EXTRA CHART STUFF ========================

var img = new Image();
img.src = goatsArray[0].imageSrc;

var img2 = new Image();
img2.src = 'images/cruisin-goat-small.jpg';

var img3 = new Image();
img3.src = goatsArray[2].imageSrc;

function makeMyChart2() {
  // goatsArray === [
  // 0: {liveClicks: 2, imageName: 'Smiling 'Goat'},
  // 1:  {liveClicks: 1, imageName: 'Floating Goat}
  // ]
  // GOAL 1 : make a label array
  // var labelArray = [goatsArray[0].imageName, goatsArray[1].imageName, goatsArray[2].imageName, goatsArray[3].imageName];
  var labelArray = [];

  for (var goatIndex = 0; goatIndex < goatsArray.length; goatIndex++) {
    labelArray.push(goatsArray[goatIndex].imageName);
  }


  var goatDataArray = [];

  for (var i = 0; i < goatsArray.length; i++) {
    goatDataArray.push(goatsArray[i].liveClicks);
  }


  var ctx = document.getElementById('myChart2').getContext('2d');

  var fillPattern1 = ctx.createPattern(img, 'repeat');
  var fillPattern2 = ctx.createPattern(img2, 'repeat');
  var fillPattern3 = ctx.createPattern(img3, 'repeat');


  var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: labelArray,
      datasets: [{
        label: '# of Goat Votes',
        data: goatDataArray,
        backgroundColor: [
          fillPattern1,
          fillPattern2,
          fillPattern3,
          fillPattern1,
          fillPattern2,
          fillPattern3,
          fillPattern1,
          fillPattern2,
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)'
        ],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      },
      animation : {
        duration: 5000,
        easing: 'easeInQuad'
      }
    }
  });

}
