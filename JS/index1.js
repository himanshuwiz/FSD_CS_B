// let a=10
// console.log(a);

// const a=12;
// if(a>10)
// {
//     a=30;
//     let b=15
//     console.log(a);
//     console.log(b);
// }
// console.log(a);
// console.log(b);


// Arrow Function
// Function declaration
// function hello() {
//     console.log("Hello user");
// }
// hello();

// // Arrow function for hello1, needs to be declared before calling it
// const hello1 = () => {
//     console.log("Hello");
// };
// hello1();

// // Function declaration for sum
// function sum(x, y, z) {
//     return x + y + z;
// }

// // Arrow function for sum1
// const sum1 = (x, y, z) => {
//     return x + y + z;
// };

// const result = sum(10, 20, 30);
// console.log(result); 

// const result1 = sum1(10, 20, 30);
// console.log(result1); 


const person={
    name:"John",
    age:20,
}
// const newperson = person;
const newperson ={...person}
const newperson1 ={...person,name:"Rustom",city:"GZB"}
newperson.age = 35;
console.log(person);
console.log(newperson);
console.log(newperson1);

const employee=["DEF",45,1000000.50];
const emp1=[...employee]
console.log(emp1);
console.log(emp1);
console.log(emp1);