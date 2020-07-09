/* Things to cover:

looping through an array- ++
if an array was different sized
ending a for loop or while loop early
for in while +++
for loop in a switch

*/

// Pick a color that I like, I like 4 colors
// seafoam green, green, navy blue, black purple
// get an array of the anwers,
// 0. check if their answer === 'potato', to see if my if works
// 1. check if their answer === array[0] - yay, else 'sadface'
// 2. do it 6 times until they get it right
// 2.0 - write a loop that goes 6 times
// 2.5 - put my code asks and checks the answer in the loop
// 2.75 - end the loop with a `break`
// 3. validate against all the colors, not just seafoam green

// when they are done, check if they were never right, let them know
// or let them know all the answers cause they probably didnt get them all
// alert after the loop

for(var i = 0; i < 6; i++){
  //7 begins
  var colorsILikeCorrectAnswers = ['seafoam green', 'green', 'navy blue', 'black purple', 'orange', 'purple', 'black'];

  var colorILikeResponse = prompt('Name a color I like, there are 4');

  for (var answerIndex = 0; answerIndex < colorsILikeCorrectAnswers.length; answerIndex++) {
    //Start checking
    if (colorILikeResponse === colorsILikeCorrectAnswers[answerIndex]) {
      console.log('it worked');
      i = 1000000;
      break;
    }
    // End Checking
  }
  // 7 ends


}


// for (var i = 0; i < 6; i++) {
//   //7 begins
//   var colorsILikeCorrectAnswers = ['seafoam green', 'green', 'navy blue', 'black purple', 'orange'];

//   var colorILikeResponse = prompt('Name a color I like, there are 4');

//   var theyGotTheRightAnswer = false;

//   for (var answerIndex = 0; answerIndex < 5; answerIndex++) {
//     //Start checking
//     if (colorILikeResponse === colorsILikeCorrectAnswers[answerIndex]) {
//       console.log('it worked');
//       theyGotTheRightAnswer = true;
//       break;
//     }
//     // End Checking
//   }
//   // 7 ends

//   if (theyGotTheRightAnswer === true) {
//     break;
//   }
// }
// var i = 0;
// var theyGotTheRightAnswer = false;
// while ( i < 6 && theyGotTheRightAnswer === false ) {
//   //7 begins
//   var colorsILikeCorrectAnswers = ['seafoam green', 'green', 'navy blue', 'black purple', 'orange'];

//   var colorILikeResponse = prompt('Name a color I like, there are 4');



//   for (var answerIndex = 0; answerIndex < 5; answerIndex++) {
//     //Start checking
//     if (colorILikeResponse === colorsILikeCorrectAnswers[answerIndex]) {
//       console.log('it worked');
//       theyGotTheRightAnswer = true;
//       break;
//     }
//     // End Checking
//   }
//   // 7 ends

//   i++;
// }


// || colorILikeResponse === colorsILikeCorrectAnswers[1] || colorILikeResponse === colorsILikeCorrectAnswers[2] || colorILikeResponse === colorsILikeCorrectAnswers[3] || colorILikeResponse === colorsILikeCorrectAnswers[4]

// console.log('answer index', answerIndex);
// console.log('colorsILikeCorrectAnswers[0]', colorsILikeCorrectAnswers[answerIndex]);
// console.log('colorILikeResponse', colorILikeResponse);
