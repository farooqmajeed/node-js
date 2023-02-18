let input = " JavaScript ";
let output = "<div>" + input.trim() + "</div>";


// Here you can see the function composition
//  trim
// wrapInDiv

const trim = str => str.trim();
const wrapInDiv = str => `<div> ${str}</div>`
const toLowercase = str = str.toLowercase();

// these two are reusable function

// trim(input);
const result = wrapInDiv(toLowercase(trim(input)));

// you can see the function composition but here two many brackets with this  function

// composing and piping
// for doing that we need to install lodash
import { compose, pipe } from 'lodash/fp';

const transform = compose(wrapInDiv, toLowercase, trim);
transform(input);
// for sequence
const transformPipe = pipe(trim, wrapInDiv, toLowercase); //here it first trim input then  tolowercase then wrap in div
transformPipe(input)


// currying 
const wrap = type => str => `<${type}>${str}</${type}>`

const transformCurr = pipe(trim, toLowercase, wrap("div"))
console.log(transformCurr(input));



// updating Object
// we have two methods to update the object
// 1st way
const person = { name: "Usama" };
const updatePerson = Object.assign({}, person, { name: "Sajid", age: "30" });
console.log(updatePerson)

// 2nd way
const person2 = { name: "Usama" };
const updatePerson2 = { ...person, name: "Farooq" };
console.log(updatePerson)
// be careful when using spread operator in nested objects because it creates a shallow copy of the object
//  make deep copy of object

const person3 = { name: "Usama", address: {
    country:"Pakistan",
    city :"karachi"
} };

const updatePerson3 = { ...person, address:{...address, city:"islamabad"}, name: "Farooq" };
console.log(updatePerson)