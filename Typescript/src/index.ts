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

let employeeTS: {
  readonly id: number;
  name: string;
  retire: (date: Date) => void;
} = {
  id: 1,
  name: "TypeScript",
  retire: (date: Date) => {
    console.log(date);
  },
};
