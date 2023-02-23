//  const square = function(number){
//     return number * number;
//  }

//arrow function
const square = number => number * number;

//  usefull when using arrow functions

const job = [
    { job: 1, isActive: true },
    { job: 2, isActive: false },
    { job: 3, isActive: false }
]

// const filteredActiveJobs = job.filter(function(job){return job.isActive});
const filteredActiveJobs = job.filter(job => job.isActive)

// arrow  function does not rebind this 

// const person = {
//     talk(){
//         console.log(this);
//     }
// }

// person.talk(); {name: 'John', talk: ƒ}

const person = {
    talk() {
        
        setTimeout(function () {
            console.log(this);
        }, 1000)
    }
}
person.talk(); // it returns window object

// to overcome these issue in old days

const person = {
    talk() {
        var that = this;
        setTimeout(function () {
            console.log(that);
        }, 1000)
    }
}
person.talk(); //{name: 'John', talk: ƒ} it works!!


// in arrow function

const person = {
    talk() {
       setTimeout(() => {
        console.log(this);
       }, 1000);
    }
}
person.talk(); //{name: 'John', talk: ƒ} it works!! because arrow function does not rebind this