const array = [];

for (let i = 2; process.argv[i] !== undefined; i++) {
  if ( 0 <= process.argv[i] && process.argv[i] <= 9999 ) {
    let args = process.argv[i]
    array.push(Number(args))
  } else {
    console.log("0 以上9999 以下を入力してください");
    break ;
  }
}

for (let i = 0; i < array.length; i++) {
  let min = array[i];
  let k = i;
  for (let j = i + 1; j < array.length; j++) {
    if( min > array[j]) {
      min = array[j];
      k = j;
    }
  }
  let tmp = array[i];
  array[i] = array[k];
  array[k] = tmp;
}
console.log(array)