'use strict';

var confirmQuiz = confirm('Hello, would you like to take a quiz?');

if (confirmQuiz) {
  console.log('Awesome!  Let\'s get started!');
} else {
  console.log('Too bad, starting anyways.');
}

var quizResponseOne = prompt('Please answer with Y or N.  Does Adam have a dog?');

if (quizResponseOne.toUpperCase() === 'Y' || quizResponseOne.toUpperCase() === 'YES') {
  console.log('Awesome! You are correct');
} else {
  console.log('Too bad, you were wrong.  Adam has a dog.');
}

var names = ['Adam', 'Amanda', 'Mika'];

for (var i = 0; i < names.length; i++) {
  console.log('index of loop: ', i);
  console.log('name index: ', names[i]);
}
