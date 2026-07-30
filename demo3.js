const student = {
    name: "Arjun",
    age: 20,
    branch: "AIML",
    city:"Ghaziabad"
}

// const name = student.name;
// const age = student.age;
// const branch = student.branch;

// Destructuring Object
const { name:Name, Age , Branch, city = "Banglore", Gender = "Male"} = student;

console.log("Name =", Name);
console.log("Age =", Age);
console.log("Branch =", Branch);
console.log("City :", city);
console.log("Gender :",Gender);


//  Destructuring Array

const arr = [13, 34, 645 ,75, 44, 76, 97, 76];
const [a, b, c, ...val] = arr;

console.log(a);
console.log(b);
console.log(c);
console.log(val);


