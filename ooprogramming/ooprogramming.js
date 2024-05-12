// Task 1: Code a Person class
class Person{
    constructor(name = "Tom", age = 20, energy = 100) {
        this.name = name;
        this.age = age;
        this.energy = energy;
    }
    sleep() {
        this.energy += 10;
    }
    doSomethingFun() {
        this.energy -= 10;
    }
}
// Task 2: Code a Worker class
class Worker extends Person{
    constructor(xp = 0, hourlyWage = 10, name, age, energy) {
        super(name, age, energy);
        this.xp=xp;
        this.hourlyWage = hourlyWage;
    }
    goToWork() {
        this.xp += 10;
    }
}
// Task 3: Code an intern object, run methods
function intern() {
    let intern = new Worker(0, 10, "Bob", 21, 110);
    intern.xp = 0;
    intern.hourlyWage = 10;
    intern.name = "Bob";
    intern.age = 21;
    intern.energy = 110;
    intern.goToWork();
    return intern;
}
console.log(intern());

// Task 4: Code a manager object, methods
function manager() {
    let manager = new Worker(100, 30, "Alice", 30, 120);
    manager.xp = 100;
    manager.hourlyWage = 30;
    manager.name = "Alice";
    manager.age = 30;
    manager.energy = 120;
    manager.doSomethingFun();
    return manager;
}
console.log(manager());