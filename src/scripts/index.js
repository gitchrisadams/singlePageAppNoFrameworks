"use strict";

// Import Underscore library:
var _ = require('underscore'),
  names = ['Bruce Wayne', 'Wally West', 'John Jones', 'Kyle Rayner', 'Arthur Curry', 'Clark Kent'],
  otherNames = ['Barry Allen', 'Hal Jordan', 'Kara Kent', 'Diana Prince', 'Ray Palmer', 'Oliver Queen'];

// Import user defined module:
var module1 = require('./module1.js');

let myLet1 = "test";

// Use imported module
module1();

_.each([names, otherNames], function(nameGroup) {
  findSuperman(nameGroup);
});

function findSuperman(values) {
  _.find(values, function(name) {
    if (name === 'Clark Kent') {
      console.log('It\'s Superman!');
    } else {
      console.log('... No superman!');
    }
  });
}
