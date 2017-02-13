'use strict';

var myTweets = ['asfsadf', 'kjfl', 'fsdfsd'];

var myUser = {
  fullName: 'Ben',
  userName: 'slothbear',
  numberOfFollowers: 5,
  email: 'ben@ben.bn',
  tweets: myTweets,

  login: function() {
    console.log(fullName + ' has now logged in!');
  }
};

myUser.email = 'ben@ben.ben';
