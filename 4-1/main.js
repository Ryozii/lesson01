const numbers = [process.argv[2],process.argv[3],process.argv[4],process.argv[5],process.argv[6]];

let list = [];
numbers.forEach(function(number) {
  list.push(number)
})

function compareNum (a, b) {
  return a - b;
}
list.sort(compareNum);

if ( list.indexOf(undefined) === -1 ) {
  console.log(list[2]);
} else {
  console.log("5つの整数を入力してください");
}