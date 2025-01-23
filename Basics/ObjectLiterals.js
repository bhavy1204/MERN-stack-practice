//Used to Store key value pair and complex entities
//Way of storing objects
// REMBER : OBJECTS ARE DIFFERENT FROM OBJECT LITERALS

// propert=> (key,value);
//Objects are collection of properties

//Objects have no orders and we can also store arrays in it.
// console.clear();
let student = { name: "bhavy", gender: "male" };
console.log(student.gender);
console.log(student.name);
student.name = "Ashish";
console.log(student.name);

delete student.name;

console.log(student.name);

let college = {
  student1: {
    name: "Ashish",
    age: 20
  },
  student2: {
    name: "Ashish",
    age: 15
  }
};
console.log(college.student1.name);
console.log(college.student2.age);


let arr=[{name:"bhavy"},{name:"Ashish"},{name:"Chintu",gender:'M'}];

console.log(arr[0].name);
console.log(arr[2].gender);


//MATH Object
console.log(Math.PI);

let a=Math.pow(10,3.9);
console.log(a);

//MATH.floor => Round off to least or lower bound
//Math.ceil => Round off to higher bound
//Math.random =>  Generate a randome number (0 to 1)(NOT including 1);

// console.log(Math.random());

console.log(Math.floor(Math.random()*10)+1);

