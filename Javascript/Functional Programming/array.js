//updating array with immutablity

const numbers = [1, 2, 3];

//adding 
// const added = [...numbers, 4];
// const added = [0, ...numbers];

const index = numbers.indexOf(2);

const added = [...numbers.slice(0, index), 4, ...numbers.slice(index)]; //adding number in index 2 = [1,4,2,3]

// removing

const removed = numbers.filter(n=> n!== 2);

// updating

const updatedArr = numbers.map(n => n===2  ? 20 : n )