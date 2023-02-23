class Person {
    constructor(name) {
        this.name = name;
    }
    walk() {
        console.log("walk");
    }
}
// class Teacher { 
//     tech(){
//         console.log("tech");
//     }
//  }
//   two solutions to use walk function in Teacher class by inheritance and composition

// you just need to add extend with the class  name like Peron here
class Teacher extends Person { 
    constructor(name, degree){
        super(name);
        this.degree = degree;
    }
   tech(){
       console.log("tech");
   }
}

const teacher = new Teacher("Inheritance");

