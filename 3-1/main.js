let array_x = [1,2,3,4,5,6,7,8,9]
let array_y = [1,2,3,4,5,6,7,8,9]

for ( let x = 0; x < array_x.length; x++) {
  let array_kuku = [];
  for ( let y = 0; y < array_y.length; y++) {
    let array_dan = (array_x[x] * array_y[y])
    array_kuku.push(array_dan);
  }
  console.log(array_kuku.join(''));
}