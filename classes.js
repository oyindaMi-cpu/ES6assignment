class Person {
    constructor(name, age) {
    this.name = name;
    this.age = age;
    }
    greet() {
    return `Hello, my name is ${this.name}`;
    }
    }

    const person1 = new Person("Atarah", 30);
    console.log(person1.greet()); // Hello, my name is Atarah