const num = [11, 22, 33, 44, 55, 66, 77];
const even = num.filter((i) => i%2 == 0 );
console.log("Num :", num);
console.log("Even :", even);

const square = num.map((i) => i*i);
const squareSum = square.reduce((acc, i) => i+acc);
console.log("Square Sum :", squareSum);
