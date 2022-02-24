const array = [];

function randomNum(min, max){
  return Math.floor( Math.random() * (max - min + 1)) + min;
}

for(let i = 0; i <= 9; i++){
  while(true){
    let num = randomNum(0, 9);
    if(array.includes(num)){
      continue
    }
      array.push(num);
      break;
  }
}

console.log(array.join(" "))