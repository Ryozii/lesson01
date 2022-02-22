const students = [17,38,100,95,23,62,77,45,69,81,83,51,42,36,60]

const numbers = [0,10,20,30,40,50,60,70,80,90,100,110]
let serch_numbers = [];
let point = "*";

for (let i = 0,j = 1; i < 11; i++, j++) {
  let result = students.filter(function(student) {
    let num1 = numbers[i];
    let num2 = numbers[j];
    return num1 <= student && student < num2 ;
  }).length;
  serch_numbers.push(result);
}
const max_number = Math.max(...serch_numbers)


for ( let x = 1; x <= max_number; x++) {
  let graph = [];
  for ( let y = 0; y < serch_numbers.length; y++) {
    const result_numbers = {
      max_numbers: serch_numbers[y] === max_number,
      second_numbers: serch_numbers[y] === max_number-1,
      third_numbers: serch_numbers[y] === max_number-2 
    }

    if ( result_numbers.max_numbers) {
      graph.push(point)
    } else if ( x === 2 && result_numbers.second_numbers) {
      graph.push(point)
    } else if ( x === 3 && result_numbers.third_numbers || x === 3 && result_numbers.second_numbers ) {
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