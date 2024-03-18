// console.log("Temporal Deadzone");

// {
//   const rabbit = "I am a Rabbit";
//   console.log(rabbit); // 1
// }

// console.log(rabbit); //2

// {
//   console.log(rabbit);
//   const rabbit = "I am a Rabbit";
// }

// THIS

// function foo() {
//   var rabbit = "rabbit";
//   this.printAnimal();
// }

// function printAnimal() {
//   console.log(this);
//   console.log(this.rabbit);
// }

// foo();

// DEFAULT BINDING

// var foo = function () {
//   console.log("this in the inner scope", this);
//   console.log(this);
// };

// foo();

// var foo1 = function () {
//   console.log(this.rabbit);
// };

// console.log("this in the outer scope", this);
// var rabbit = "I am a rabbit";

// foo1();

// function foo() {
//   console.log(this.myName);
// }

// var animal = {
//   myName: "Animal",
//   printObject: foo,
// };

// console.log(this);

// var fn = animal.printObject;
// fn();

// animal.printObject();

// const foo = (param) => {
//   console.log("this--->", this);
//   console.log(`Hello, ${param}, I am ${this.name}`);
// };

// var person = {
//   name: "Shrikanth",
//   greetme: foo.bind(this),
// };

// person.greetme("John");

// const wishMe = person.greetme;
// wishMe("John");

// function foo() {
//   console.log(this);
//   console.log(this.name);
// }

// var person = {
//   name: "Shrikanth",
// };

// const func = foo.bind(person);

// func();

// NEW BINDING

// Constructor function
// function Foo() {
//   this.name = "Shrikanth constructor function";
//   console.log(this);
//   this.greetMe = function () {
//     console.log(`Hello, I am ${this.name}`);
//   };
// }

// class Foo1 {
//   constructor() {
//     this.name = "Shrikanth1 class";
//     console.log(this);
//   }

//   greetMe = function () {
//     console.log(`Hello, I am ${this.name}`);
//   };
// }

// var obj = new Foo();
// console.log(obj);
// obj.greetMe();

// var obj = new Foo1();
// obj.greetMe();

var foo = () => {
  console.log(this === window);
  console.log(this);
};

var person = {
  name: "Shrikanth",
};

foo.bind(person)();
foo.apply(person);
foo.call(person);

// foo();
