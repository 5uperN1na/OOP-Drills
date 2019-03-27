//Write 5 object literals, have them named person1-person5. 
//Give each a name property and have this be a name of a friend or family member. 
//Then give each one a second property, sayHello, which is a function that will console log the string “Hello! My name is ________”.
//Call the sayHello function on each object and check the console for a response.

let person1 = {
    name: 'Tricia',
    sayHello: function () { console.log(`Hello! My name is ${this.name}`) }
}

person1.sayHello();

let person2 = {
    name: 'Mary',
    sayHello: function () { console.log(`Hello! My name is ${this.name}`) }
}

person2.sayHello();

let person3 = {
    name: 'Joe',
    sayHello: function () {console.log(`Hello! My name is ${this.name}`)}
}

person3.sayHello();

let person4 = {
    name: 'Glenn',
    sayHello: function(){ console.log(`Hello, My name is ${this.name}`)}
}

person4.sayHello();

let person5 = {
    name: 'Trinh',
    sayHello: function(){console.log (`Hello, My name is ${this.name}`)}
}

person5.sayHello();

//Create a constructor function that will take a name, city, and age. 
//(Remember, pseudo classes look like functions but are named with starting with a capital letter ex: function Example() null).
//Write a method that will print a string similar to this “Hey! My name is ___ I am __ years old and live in __”.

class Someone {
    constructor(name, city, age) {
        this.name = name;
        this.city = city;
        this.age = age;
    }
    message() {
        console.log(`Hey! My name is ${this.name}. I am ${this.age} years old and live in ${this.city}`);
    }
}

let p1 = new Someone('Tricia', 'Flower Mound', '45');
p1.message();