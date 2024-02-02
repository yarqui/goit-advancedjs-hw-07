/*
  A Student class that contains three properties: name, age, and grade. 
  Instead of declaring these properties in the body of the class, then in the constructor, and finally assigning them values, 
  write a shortened initialization.
*/

class Student {
  constructor(public name: string, public age: number, public grade: string) {}
}

const student = new Student("Yar", 37, "First");
console.log("student:", student);

export {};
