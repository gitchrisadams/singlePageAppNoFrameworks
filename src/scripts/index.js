import Timer from "./module.js";

let timeElement = new Timer( document.querySelector("time") );

timeElement.update();

console.log("Hello from index.js after timeElement");

