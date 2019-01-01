var task = {
    title: 'My task',
    description: 'My Description'
};

Object.defineProperty(task, 'toString', {
    value: function () {
        return this.title + ' ' + this.description;
    },
    writable: false,
    enumerable: true,
    configurable: true
});

task.toString = 'hi';
console.log(Object.keys(task));
console.log(task.title);
