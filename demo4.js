// Rest And Spread.

const student = {
    name: "Arjun",
    age: 20,
    branch: "AIML",
}

const newStd= {
    ...student,
    city:"Ghaziabad",
    gender:"Male"
}

console.log(student);
console.log(newStd);
