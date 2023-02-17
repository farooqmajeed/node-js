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

// you can see the function composition but here two many brackets with this  function

// composing and piping
// for doing that we need to install lodash
import {compose, pipe} from 'lodash/fp';

const transform = compose(wrapInDiv, toLowercase, trim) ;
transform(input);
// for sequence
const transformPipe = pipe(  trim, wrapInDiv,toLowercase); //here it first trim input then  tolowercase then wrap in div
transformPipe(input)


// currying 
const wrapInSpan = (type, str) => `<${type}>${str}</${type}>`
