const tate = process.argv[2]
const yoko = process.argv[3]

let mark = "*-".repeat(yoko);

for ( let i = 1; i <= tate; i++) {
  let result = [];
  for ( let j = 1; j <= yoko; j++) {
    if( i % 2 !== 0) {
      result.push(mark.charAt(j + 1));
    } else {
      result.push(mark.charAt(j));
    }
  }
    console.log(result.join(""));
}