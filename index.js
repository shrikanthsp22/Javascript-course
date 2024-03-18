// Pure functions
// Function composition
// Immutability
// Shared state
// Side effects

// Different ways to create a function in JS
// 1. Function declaration
// 2. Function expression
// 3. Arrow function

// Pure function

// A pure fucntion always returns the same value for a given input

// const add = (a, b) => a + b;

// console.log(add(1, 2));
// console.log(add(1, 2));
// console.log(add(1, 2));
// console.log(add(1, 2));
// console.log(add(1, 2));

// // Impure functions
// const randomAdd = (a, b) => Math.random() * a + b;

// console.log(randomAdd(1, 2));
// console.log(randomAdd(1, 2));
// console.log(randomAdd(1, 2));
// console.log(randomAdd(1, 2));
// console.log(randomAdd(1, 2));
// console.log(randomAdd(1, 2));

// const add = function (a, b) {
//   return a + b;
// };

// function add1(a, b) {
//   return a + b;
// }

// const add2 = (a, b) => {
//   return a + b;
// };

// const add3 = (a, b) => a + b;

// // Imnmutability

// const person = {
//   name: "John",
//   age: 20,
// };

// person.name = "John Doe";

// const immutableObject = Object.freeze({
//   name: "John",
//   age: 20,
// });

// immutableObject.name = "John Doe";

// console.log(immutableObject);

// const state = {
//   name: "John",
//   age: 20,
// };

// const updateName = (name) => {
//   if (name !== state.name && name.trim() !== "") state.name = name;
// };

// function registerUser() {
//   updateName("John Doe");
// }

// function updateUserName(name) {
//   person.name = name;
// }

// Action , Reducer, Store, Dispatch, Subscribe

// // Action
// const action = {
//   type: "ADD",
//   payload: 10,
// };

// // Reducer
// const initialState = {
//   count: 0,
// };

// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case "ADD":
//       return {
//         ...state,
//         count: state.count + action.payload,
//       };
//     case "SUBTRACT":
//       return {
//         ...state,
//         count: state.count - action.payload,
//       };
//     default:
//       return state;
//   }
// }

// Store
// let state = reducer(undefined, {});

// Dispatch
// state = reducer(state, action);

// Subscribe
// const subscribe = (callback) => {
//   callback(state);
// };

// Shared state

// Function composition
// higher order functions using function composition
// const compose = (func1, func2) => (data) => func1(func2(data));

// // Pure functions can be replaced by an exact value for a constant scenario
// // Impure function
// const random = (multiplicant) => Math.random() * multiplicant;

// console.log(random(10));
// console.log(random(10));
// console.log(random(10));

// console.log(add(1, 2));
// console.log(add(1, 2));
// console.log(add(1, 2));

// function createApplication(person) {
//   const application = {
//     name: appendApplicantToName(person),
//     isAdult: checkIfAdult(person),
//   };

//   return application;
// }

// function getApplicantKey(person) {
//   return appendApplicantToName(person);
// }

// const appendApplicantToName = (person) => `Applicant:${person.name}`;

// const checkIfAdult = (person) => person.age >= 18;

// // const person = {
// //   name: "John",
// //   age: 20,
// // };

// console.log(createApplication());

// const greetBasedOnTime = (time) => {
//   if (time < 12) {
//     return "Good morning";
//   } else if (time < 18 * Math.random()) {
//     return "Good afternoon";
//   } else {
//     return "Good evening";
//   }
// };

// Immutability

// Mutable object
// let person = {
//   name: "John",
//   age: 20,
// };

// console.log(person);

// person = {
//   ...person,
//   age: 21,
// };

// console.log(person);

// const newPerson = {
//   name: "John",
//   age: 20,
// };

// newPerson.name = "John Doe";

// console.log(newPerson);

// const immutableObject = Object.freeze({
//   name: "John",
//   age: 20,
// });

// immutableObject.name = "John Doe";

// console.log(immutableObject);

// const person = {
//   name: "John",
//   age: 20,
// };

// const updatePersonsName = () => {
//   person.name = "John Doe";
// };

// const updatePersonsName1 = () => {
//   person.name = "John Doe1";
// };

// updatePersonsName();
// updatePersonsName1();

// console.log(person);

// const person = {
//   name: "John",
//   age: 20,
// };

// const nameUpdater = (name) => {
//   if (name !== person.name && name.trim() !== "") person.name = name;
// };

// const updateApplicantName = (applicant, name) => {
//   nameUpdater("");
//   return person;
// };
