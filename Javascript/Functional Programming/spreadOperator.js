const first =[1,2,3];
const second = [4,5,6];

// const combine = first.concat(second);
// after ES6
// const combined = [...first,...second];
// const combined = [...first, 'a', ...second, 'b']; get every single elements

//clone the array
const clone = [...first];
console.log(first);
console.log(clone);


// with objects

const firstObj = { name:"john"};
const secondObj = { name:" Delton" };

const combineObj = { ...firstObj, ...secondObj , location:"Karachi"};