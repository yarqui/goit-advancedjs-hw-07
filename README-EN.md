# Task 1

A Student class that contains three properties: name, age, and grade.
Instead of declaring these properties in the body of the class, then in the constructor, and finally assigning them values,
write a shortened initialization.

```ts
class Student {
  public name: string;
  public age: number;
  public grade: string;

  constructor(name: string, age: number, grade: string) {
    this.name = name;
    this.age = age;
    this.grade = grade;
  }
}
```

# Task 2

Your task is to create two classes - Employee and Manager.

The Employee class must include:

the name property, which will be available to everyone.
the department property, which will be available only within the Employee class.
salary, which will be available only within the Employee class and its subclasses.

The Manager class must be a subclass of the Employee class

It is necessary to implement a constructor in the Manager class that will call the superclass constructor and increase the salary by 10000.

```ts
class Employee {
  name: string;
  department: string;
  salary: number;

  constructor(name: string, department: string, salary: number) {
    this.name = name;
    this.department = department;
    this.salary = salary;
  }

  getEmployeeDetails() {
    return `Name: ${this.name}, Department: ${this.department}, Salary: ${this.salary}`;
  }
}

class Manager extends Employee {}
```

# Task 3

You are creating a game with characters with different roles.
Now you are working on the Wizard class, which must implement two interfaces - ICharacter and ISpellCaster.

Define the ICharacter and ISpellCaster interfaces so that they meet the requirements of the Wizard class.
The ICharacter interface must include the name and level properties, and even the introduce and levelUp methods.
The ISpellCaster interface must include the castSpell method.

```ts
class Wizard implements ICharacter, ISpellCaster {
  constructor(public name: string, public level: number) {
    if (this.level < 1) {
      throw new Error("Level too low");
    }
  }

  introduce(phrase: string): void {
    console.log(phrase + ", " + this.name);
  }

  castSpell(): void {
    console.log("Casting a spell, behold my power!");
  }

  levelUp(): void {
    this.level++;
    console.log(`Level up! New level is ${this.level}`);
  }
}

const wizard = new Wizard("Merlin", 15);

wizard.introduce("I am the mighty wizard");
wizard.castSpell();
wizard.levelUp(); // Level up! New level is 16
```

# Task 4 \*

In this task, you will have to realize a life scenario where a person, a key, and a house interact with each other.

Key: Create a Key class. It should have one private property, signature, which is generated randomly when an object of this class is created (for example, Math.random()). Also, this class must have a getSignature method that returns the value of the signature property.

Person: Create a Person class. The constructor of this class accepts an object of the Key class and stores them in the private key property. The Person class must have a getKey method that returns the stored key.

House: Create an abstract class called House. This class has two properties: door, which can be open (true) or closed (false), and key, which stores an object of the Key class. This class must also have a comeIn method that adds an object of class Person to the tenants array if the door is open. Your abstract House class must also have an abstract OpenDoor method that accepts a Key class object.

MyHouse class: Create a MyHouse class that inherits from the abstract House class. Implement the openDoor method in this class. If the key passed to this method matches the key stored as key, then the door opens.

After implementing all the classes, create objects for each class and try to recreate the scenario in which a person comes home.

For example, like this:

```ts
const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);
```
