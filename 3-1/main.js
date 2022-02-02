for ( let x = 1; x < 10; x++) {
  let array_kuku = [];
  for ( let y = 1; y < 10; y++) {
    let array_dan = (x * y)
    array_kuku.push(array_dan);
  }
  console.log(array_kuku.join(''));
}