function people() {
    class Employee {
      constructor(name, age) {
        if (new.target == Employee) {
          throw new Error('Cannot make instance of abstract class Employee.');
        }
        this.name = name;
        this.age = age;
        this.salary = 0;
        this.tasks = [];
      }
  
      work() {
        let currentTask = this.tasks.shift();
        console.log(`${this.name} ` + currentTask);
        this.tasks.push(currentTask);
      }
  
      getSalary() {
        return this.salary;
      }
  
      collectSalary() {
        console.log(`${this.name} received ${this.getSalary()} this month.`);
      }
    }
  
    class Junior extends Employee {
      constructor(name, age) {
        super(name, age);
        this.tasks.push('is working on a simple task.');
      }
    }
  
    class Senior extends Employee {
      constructor(name, age) {
        super(name, age);
        this.tasks.push('is working on a complicated task.');
        this.tasks.push('is taking time off work.');
        this.tasks.push('is supervising junior workers.');
      }
    }
  
    class Manager extends Employee {
      constructor(name, age) {
        super(name, age);
        this.dividend = 0;
        this.tasks.push('scheduled a meeting.');
        this.tasks.push('is preparing a quarterly report.');
      }
  
      getSalary() {
        return super.getSalary() + this.dividend;
      }
    }
  
    return { Employee, Junior, Senior, Manager };
  }
  
  const classes = people();
  const junior = new classes.Junior('Ivan', 25);
  
  junior.work(); // Ivan is working on a simple task.
  junior.work(); // Ivan is working on a simple task.
  
  junior.salary = 5811;
  junior.collectSalary(); // Ivan received 5811 this month.
  
  const senior = new classes.Senior('Alex', 31);
  
  senior.work(); // Alex is working on a complicated task.
  senior.work(); // Alex is taking time off work.
  senior.work(); // Alex is supervising junior workers.
  senior.work(); // Alex is working on a complicated task.
  
  senior.salary = 12050;
  senior.collectSalary(); // Alex received 12050 this month.
  
  const manager = new classes.Manager('Tom', 55);
  
  manager.salary = 15000;
  manager.collectSalary(); // Tom received 15000 this month.
  manager.dividend = 2500;
  manager.collectSalary(); // Tom received 17500 this month.