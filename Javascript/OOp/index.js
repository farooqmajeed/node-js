// console.log('hello world');

// const person ={
//     firstName: 'John',
//     lastName: 'Doe',
//     fullName(){
//         return `${this.firstName} ${this.lastName}`
//     }
// }

// person.fullName = 'Joenix Martin';

// console.log(person.fullName());

// getters => access properties in an object
//setter => to change or mutate the properties in an object

const person ={
    firstName: 'John',
    lastName: 'Doe',
   get fullName(){  //getter
        return `${this.firstName} ${this.lastName}`
    }
}
console.log(person.fullName);

const personForSetter ={
    firstName: 'John',
    lastName: 'Doe',
   get fullName(){  //getter
        return `${this.firstName} ${this.lastName}`
    },
    set fullName(value){  //setter
        const parts = value.split('');
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
}
personForSetter.fullName = " John Smith"

console.log(personForSetter);