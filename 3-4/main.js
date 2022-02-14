const number_a = process.argv[2]
const reNumber_a = number_a.split("").reverse().join("");

const number_b = process.argv[3]
const reNumber_b = number_b.split("").reverse().join("");

const result = Number(reNumber_a) + Number(reNumber_b);
console.log(result);