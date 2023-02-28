// we refer this type of code as procedural programming
let baseSalary = 30000;
let overtime = 10;
let rate = 20;

const getSalary = (baseSalary, overtime, rate) => {
    
    return baseSalary + (overtime * rate);
}

//  function with too many arguments/parameters

// with OOP we can do that in this way

let employee = {
     baseSalary : 30000,
 overtime : 10,
 rate : 20,
 getWage : function(){
    return this.baseSalary + (this.overtime * this.rate);
 }
};
employee.getWage();

//  fewer arguments better way to do this
// binding fields (object state like properties and functions in a single unit called encapsulation)
