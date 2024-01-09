// Task 1: Code a Person class
class person {
   /*
    constructor() {
        this.name = "Tom";
        this.age = 20;
        this.energy = 100;
    }
*/
    constructor(name, age, energy) {
        this.name = name;
        this.age = age;
        this.energy = energy;
    }

    sleep() {
        this.energy+= 10;
    };

    doSomethingFun() {
       this.energy -= 10;
    }
}
// Task 2: Code a Worker class
class Worker extends person{
    constructor(name, age, energy, xp, hourlyWage) {
        super(name, age, energy);
        this.xp = 0;
       this.hourlyWage = 10;
    }

    goToWork() {
        this.xp += 10;
    }
}
// Task 3: Code an intern object, run methods
function intern() {
    var intern = new Worker("Bob", 21, 110, 0, 10);
    intern.goToWork();
    return intern;
}

// Task 4: Code a manager object, methods
function manager() {
    var manager = new Worker("Alice", 30, 120, 100, 30);
    manager.doSomethingFun();
    console.log(manager.name);
    return manager;
}
