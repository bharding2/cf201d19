'use strict';

var confirmQuiz = confirm('Hello, would you like to take a quiz?');

if (confirmQuiz) {
  console.log('Awesome!  Let\'s get started!');
} else {
  console.log('Too bad, starting anyways.');
}
