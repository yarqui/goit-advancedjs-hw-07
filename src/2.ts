/*
Your task is to create two classes - Employee and Manager.

  The Employee class must include:

  the name property, which will be available to everyone.
  the department property, which will be available only within the Employee class.
  salary, which will be available only within the Employee class and its subclasses.


  The Manager class must be a subclass of the Employee class

  It is necessary to implement a constructor in the Manager class that will call the superclass constructor and increase the salary by 10000.

*/

class Employee {
  constructor(
    public name: string,
    private department: string,
    protected salary: number
  ) {}

  getEmployeeDetails() {
    return `Name: ${this.name}, Department: ${this.department}, Salary: ${this.salary}`;
  }
}

class Manager extends Employee {
  constructor(name: string, department: string, salary: number) {
    super(name, department, salary + 10000);
  }
}

const emp = new Employee("Yarique", "IT", 5000);
emp.getEmployeeDetails();

const man = new Manager("Yar", "IT", 5000);
man.getEmployeeDetails();

export {};
