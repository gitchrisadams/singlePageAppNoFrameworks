"use strict";

// Import user defined module:
var module1 = require('./module1.js');

// es6 import
import { function1 } from './module2';

let myLet1 = "test";

console.log(myLet1);

// Use imported module
module1();
function1();
