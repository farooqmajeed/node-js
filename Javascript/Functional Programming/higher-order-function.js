let input  = " JavaScript ";
let output = "<div>" + input.trim() + "</div>";


// Here you can see the function composition
//  trim
// wrapInDiv

const trim = str =>  str.trim();
const wrapInDiv = str => `<div> ${str}</div>`
const toLowercase = str =str.toLowercase();

// these two are reusable function

// trim(input);
const result  = wrapInDiv(toLowercase(trim(input))); 
