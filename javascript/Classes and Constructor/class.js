'use strict'

// same as prototype using Class keyword

class Task {
    constructor(name) {
        this.name = name;
        this.completed = false;
    };
    complete() {
        console.log('completing task: ' + this.name);
        this.completed = true;
    };

    save() {
        console.log('saving Task: ' + this.name);
    };

}

Task.prototype.complete = function () {
    console.log('completing task: ' + this.name);
    this.completed = true;
};

Task.prototype.save = function () {
    console.log('saving Task: ' + this.name);
};

var task1 = new Task('create a demo for constructors');
var task2 = new Task('create a demo for module');
var task3 = new Task('create a demo for singleton');
var task4 = new Task('create a demo for prototypes');

task1.complete();
task2.save();
task3.save();
task4.save();
