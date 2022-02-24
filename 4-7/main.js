let names = process.argv[2];
let array_name = names.split(",");
let array_result = [];

for ( let i = 0; i < array_name.length; i++) {
  let lowerName = array_name[i].toLowerCase();
  if ( lowerName.includes(process.argv[3])) {
    array_result.push(lowerName)
  }
}

let sortName = array_result.sort()
console.log(sortName.join(" "))