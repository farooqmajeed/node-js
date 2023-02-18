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