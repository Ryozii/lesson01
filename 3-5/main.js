const students = [17,38,100,95,23,62,77,45,69,81,83,51,42,36,60]

const numbers = [0,10,20,30,40,50,60,70,80,90,100,110]
let result_number = [];
let point = "*";

for (let i = 0,j = 1; i < 11; i++, j++) {
  let result = students.filter(function(student) {
    let num1 = numbers[i];
    let num2 = numbers[j];
    return num1 <= student && student < num2 ;
  }).length;
  result_number.push(result);
}
let max_number = Math.max(...result_number);

for ( let x = 1; x <= max_number; x++) {
  let graph = [];
  for ( let y = 0; y < result_number.length; y++) {
    if ( result_number[y] === max_number) {
      graph.push(point)
    } else if ( x === 2 && result_number[y] === max_number-1) {
      graph.push(point)
    } else if ( x === 3 && result_number[y] === max_number-2 || x === 3 && result_number[y] === max_number-1 ) {
      graph.push(point)
    } else {
      graph.push(" ")
    }
  }
  console.log(graph.join("  "))
}

console.log("---------------------------------")
numbers.pop();
console.log(numbers.join(" "))