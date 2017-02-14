'use strict';

var myTweets = ['asfsadf', 'kjfl', 'fsdfsd'];

var myUser = {
  fullName: 'Ben',
  userName: 'slothbear',
  numberOfFollowers: 5,
  email: 'ben@ben.bn',
  tweets: myTweets,
  myArray: [],

  login: function() {
    console.log(fullName + ' has now logged in!');
  }
};

myUser.email = 'ben@ben.ben';

var userElement = document.createElement('h1');

userElement.setAttribute('id', 'first-user-heading');

var sectionEl = document.getElementById('main-content');

sectionEl.appendChild(userElement);

var storeHours = [
  '6:00 AM',
  '7:00 AM'
];

storeHours[i];
