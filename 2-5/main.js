let money = process.argv[2]

const hundred = money / 100
money = money % 100
const ten = money / 10
money = money % 10
const one = money / 1

console.log( "100円玉" + Math.floor(hundred) + "枚" )
console.log( "10円玉" + Math.floor(ten) + "枚" )
console.log( "1円玉" + Math.floor(one) + "枚" )