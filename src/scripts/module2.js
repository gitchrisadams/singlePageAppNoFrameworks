"use strict";
function function1(){
  console.log("hello there function1");
}

function function2(){
  console.log("hello there function2");
}

// Export module:
module.exports =  {

  function1: function1,
  function2: function2

};
