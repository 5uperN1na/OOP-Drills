//Object Literals, Pseudo Classes and methods***********************************

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
    sayHello: function () { console.log(`Hello! My name is ${this.name}`) }
}

person3.sayHello();

let person4 = {
    name: 'Glenn',
    sayHello: function () { console.log(`Hello, My name is ${this.name}`) }
}

person4.sayHello();

let person5 = {
    name: 'Trinh',
    sayHello: function () { console.log(`Hello, My name is ${this.name}`) }
}

person5.sayHello();

//Create a constructor function that will take a name, city, and age. 
//(Remember, pseudo classes look like functions but are named with starting with a capital letter ex: function Example() null).
//Write a method that will print a string similar to this “Hey! My name is ___ I am __ years old and live in __”.


function Someone(name, city, age) {
    this.name = name;
    this.city = city;
    this.age = age;
}

Someone.prototype.message = function () {
    console.log(`Hey! My name is ${this.name}. I am ${this.age} years old and live in ${this.city}`);
};

//Create 5 instances of the same friends from step 1, except this time use the pseudo class and method we just created.

let s1 = new Someone('Tricia', 'Flower Mound', '45');
s1.message();

let s2 = new Someone('Mary', 'Carrollton', '61');
s2.message();

let s3 = new Someone('Trinh', 'Dallas', '43');
s3.message();

let s4 = new Someone('Glenn', 'Dallas', '65');
s4.message();

let s5 = new Someone('Ameerah', 'Dallas', '37');
s5.message();

//Using the ES6 syntax makes object oriented programming in javascript much easier to understand. Let’s use the ES6 syntax and create the same class that we just did. (Hint: ES6 classes are not made using a constructor function, they use a keyword: class. They have a constructor which is used to take in the parameters name, city, and age. And methods will not need to be prototypes!).

class P {
    constructor(name, city, age) {
        this.name = name;
        this.city = city;
        this.age = age;
    }
    message() {
        console.log(`Hey! My name is ${this.name}. I am ${this.age} years old and live in ${this.city}`);
    }
}

let p1 = new P('Tricia', 'Flower Mound', '45');
p1.message();

let p2 = new P('Mary', 'Carrollton', '61');
p2.message();

let p3 = new P('Trinh', 'Dallas', '43');
p3.message();

let p4 = new P('Glenn', 'Dallas', '65');
p4.message();

let p5 = new P('Ameerah', 'Dallas', '37');
p5.message();


//Inheritance***********************************

//Create a class called vehicle, not every vehicle is a truck, nor is it a sedan, motorcycle, or coupe.
//So let’s define a vehicle in a way that we can use inheritance to determine if it is a truck, sedan, or motorcycle.
//All vehicles have wheels, some have 2 some have 4. Not all have doors, and not all have reverse.
//So to keep it simple lets have this vehicle class construct an object that only has the properties manufacturer and number of wheels.

class Vehicle {
    constructor (manufacturer, type, wheels){

    
        this.manufacturer = manufacturer;
        this.type = type;
        this.wheels = wheels;
      
    }

    //Include a method called aboutVehicle, have it console log a string which will say what type of vehicle it is, who made it, and how many wheels it has.
    aboutVehicle() {
        console.log(`This is a ${this.manufacturer} , ${this.type} and it has ${this.wheels} wheels.`);
    }
}


//Trucks are vehicles, they have wheels. 
//So let’s create a vehicle class that inherits the property of wheels from vehicle, but trucks have doors (unlike motorcycles) and they have a truck bed. 
//So let’s add a number of doors property to this object as well as a boolean they it is true, it has a truck bed.

class Truck extends Vehicle{
    constructor (manufacturer, type, wheels, doors, bed){
        super (manufacturer, type, wheels);
        this.doors = doors;
        this.bed = bed; 
        bed = true;
        
    }

    aboutVehicle() {
        console.log(`This is a ${this.manufacturer} , ${this.type} and it has ${this.wheels} wheels. It also has ${this.doors} and has a ${this.bed}`);
    }
}


v1 = new Vehicle('Jeep', 'Grand Cherokee', '4');
v1.aboutVehicle();

t1 = new Truck('Ford', 'F150', '4', '2', true);
t1.aboutVehicle();

