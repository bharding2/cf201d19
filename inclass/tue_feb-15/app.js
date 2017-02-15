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

// constructors

function CookieStore(name, minCustomers, maxCustomers, avgCookiesPerCustomer, hourlyCount) {
  this.name = name;
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
  this.avgCookiesPerCustomer = avgCookiesPerCustomer;
  this.hourlyCount = hourlyCount || [];
  this.range = maxCustomers - minCustomers;
};

CookieStore.prototype.getAvgCookieCount = function() {
  return Math.floor(Math.random() * this.range + this.minCustomers) * this.avgCookiesPerCustomer;
};

var hourlyCookies = [50, 100, 45, 23, 7];

var pikePlace = new CookieStore('pike place', 23, 65, 6.3, hourlyCookies);
var otherStore = new CookieStore('other store', 100, 200, 10.0);

pikePlace.getAvgCookieCount();
otherStore.getAvgCookieCount();

console.log(pikePlace.hourlyCount[0]);

var storeFormEl = document.getElementById('new-store-form');

storeFormEl.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  console.log(event);

  event.preventDefault();
  event.stopPropagation();

  var newStoreName = event.target.cookieStoreName.value;
  var minCust = parseInt(event.target.minCust.value);
  var maxCust = parseInt(event.target.maxCust.value);
  var avgCookies = parseFloat(event.target.avgCookies.value);

  console.log(newStoreName);
  console.log(minCust);
  console.log(maxCust);
  console.log(avgCookies);
};
