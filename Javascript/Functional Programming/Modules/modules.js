import { Teacher } from "./teacher";
import { Person } from "./person";

const teacher = new Teacher("teacher", "MSC");
const person = new Person("John");

teacher.tech(); // returns teach
person.walk(); // returns walk