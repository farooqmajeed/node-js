console.log() //global

// globaly available in node.js
// setTimeout();
// clearTimeout();

// setInterval();
// clearInterval();

// window.console = console;

var message = "test";
// console.log("message", global.message); --> undefined
console.log(message);