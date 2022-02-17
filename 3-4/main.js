const number_a = process.argv[2]
const number_b = process.argv[3]

function number_reverse(num) {
  return String(num).split("").reverse().join("");
}

number_reverse(num1 = number_a);
number_reverse(num2 = number_b);

console.log(Number(number_reverse(num1)) + Number(number_reverse(num2)))