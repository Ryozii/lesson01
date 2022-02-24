const str = "こはるはるここはるここはるはるここはるこはるはるはる"

let count_koharu = 0;
let count_haruko = 0;

for (let i = 0, j = 1, k = 2 ; i < str.length; i++, j++, k++){
  if (str[i] === "こ" && str[j] === "は" && str[k] === "る"){
    count_koharu ++;
  } else if ( str[i] === "は" && str[j] === "る" && str[k] === "こ") {
    count_haruko ++;
  }
}

console.log("こはる:" + count_koharu);
console.log("はるこ:" + count_haruko);