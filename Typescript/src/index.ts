// intializing number

let age: number = 20;
// age = 'a''  showing type error message
if (age < 50) {
  age += 10;
}

// functions in typescript
//  here below the String means  the function return type
function calculateTax(tax: number): String {
  return tax;
}
//  if user does not have need to send  multiple parameters we can make them optional(arg?: number) or we can also
//  pass them default value like (args: 2000)

// Object in javascript

let employee = { id: 1 }; // this will create a new object with shape (id: number)
employee.name = "javascript"; // valid in javascript but not in TypeScript

// let employeeTS: {
//   readonly id: number;
//   name: string;
//   retire: (date: Date) => void;
// } = {
//   id: 1,
//   name: "TypeScript",
//   retire: (date: Date) => {
//     console.log(date);
//   },
// };

// ALias in typescript

type Employee =   {
    readonly id: number;
    name: string;
    retire: (date: Date) => void;
}

let employeeTS: Employee = {
    id: 1,
    name: "TypeScript",
    retire: (date: Date) => {
      console.log(date);
    },
  };

//   Union type

function kgToLb (weight: number | string): number {
    //Narrowing
    if(typeof weight === 'number'){

    } else{

    }

}
kgToLb(10);
kgToLb('10kg');


// intersection type
type Draggable = {
    drag: () => void;
}
type Resize = {
    resize: () => void;
}
type UIwidget = Draggable & Resize;

let textBox: UIwidget = {
    drag: () => {},
    resize: () => {},
}

// Literal type (specific or exact value)


// let quantity: = 50 | 100 = 100;
 type Quanity = 50 | 100; // union
let quantity: Quanity = 100;

// nullable values

function greet(name: string | null | undefined){
    if(name) 
    console.log(name.toLowerCase());
    else console.log("Hola")
}

 
// optional chaining "?."

// customer?.birthday?.getfullYear()

// optional element access operator
