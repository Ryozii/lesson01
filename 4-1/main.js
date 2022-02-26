const arr = [];
let args = process.argv.slice(2);
  for (let i = 0; i < args.length; i++) {
    arr.push(Number(args[i]));
  }

function compareNum (a, b) {
  return a - b;
}
arr.sort(compareNum);

if ( arr.indexOf(undefined) === -1 ) {
  console.log(arr[2]);
} else {
  console.log("5つの整数を入力してください");
}