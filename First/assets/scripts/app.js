// import apiKey from "./util.js";
// import {apiKey as content} from "./util.js";
// import * as util from "./util.js";

// console.log(content)
// console.log(util.apiKey);
// console.log(util.apiKey2);

// function createGreeting(userName, message = "Hello") {
//   //   console.log("Hello", userName, message);
//   return `Hi I am ${userName} ${message}`;
// }

// const createGreeting = (userName,message = 'Hello') => {
//   return `Hi I am ${userName} ${message}`;
// };

// const greeting1 = createGreeting("Arka");
// console.log(greeting1);

// const user = {
//   name: "Max",
//   age: 34,
//   greet() {
//     console.log("Hello!");
//     console.log(this.age);
//     console.log(this.name);
//   },
// };

// console.log(user.name);
// console.log(user.age);
// user.greet();

// class User {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   greet() {
//     console.log("Hi!");
//   }
// }

// const user1 = new User("Manuel", 35);
// console.log(user1);
// user1.greet();

// const hobbies = ["Sports", "Cooking", "Reading"];
// hobbies.push("Working");
// hobbies.unshift("Working");
// const index = hobbies.findIndex((item) => item === "Sports");

// const editedHobbies = hobbies.map((item) => ({ text: item }));
// console.log(editedHobbies);

// console.log(hobbies);

// console.log(index);
// console.log(hobbies);

// const userNameData = ["Max", "Swarzmuller"];
// const [firstName, lastName] = userNameData;
// console.log(firstName);
// console.log(lastName);

// const { name: userName, age } = {
//   name: "Max",
//   age: 34,
// };

// console.log(userName, age);

// const hobbies = ["Sports", "Cooking"];

// const user = {
//   name: "Max",
//   age: 34,
// };

// const newHobbies = ["Reading"];

// const mergedHobbies = [...hobbies,...newHobbies]
// console.log(mergedHobbies)

// const extendedUser ={
//     isAdmin: true,
//     ...user
// }

// console.log(extendedUser)

// const password = prompt();
// if (password === "Hello") {
//   console.log("Hello works");
// } else if (password === "hello") {
//   console.log("Hello works");
// }else{
//     console.log('Access Not Granted')
// }

// const hobbies = ['Sports','Cooking']

// for(const hobby of hobbies){
//     console.log(hobby)
// }

// setTimeout(() => {
//   console.log("Timeout");
// }, 1000);

// function greeter(greetFn){
//     greetFn();
// }
// greeter(()=>console.log('hi'));

// function init() {
//   function greet() {
//     console.log("Hi!");
//   }
//   greet();
// }

// init();

let userMessage = "Hello!";
userMessage = userMessage.concat("!!!");

const hobbies = ['Sports','Cooking']
hobbies.push('Working');

console.log(hobbies)