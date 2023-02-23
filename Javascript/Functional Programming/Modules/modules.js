import { Teacher } from "./teacher";
import { Person } from "./person";

const teacher = new Teacher("teacher", "MSC");
const person = new Person("John");

teacher.tech(); // returns teach
person.walk(); // returns walk

// export in javascript
// 1) Named export  -> import {...} from '';
// 2) Default export -> import ... from '';
//  we can also export both named and default like this import ... , {...};