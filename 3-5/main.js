const students = [17,38,100,95,23,62,77,45,69,81,83,51,42,36,60]

const numbers = [0,10,20,30,40,50,60,70,80,90,100,110]
let graph = [];
let mark = "*";

for (let i = 0,j = 1; i < 11; i++, j++) {
  
  let result = students.filter(function(student) {
    let num1 = numbers[i];
    let num2 = numbers[j];
    return num1 <= student && student < num2 ;
  }).length;

  graph.push(mark.repeat(result))
}

console.log(graph.join("  "))
console.log("---------------------------------")
numbers.pop();
console.log(numbers.join(" "))