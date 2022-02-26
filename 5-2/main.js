const jsonData = require('/Users/ryoji/lesson/lesson01/5-2/users.json');

const array = [];

jsonData.users.forEach(function(user) {
  const calculation =  function (r, str, num1, num2) {
    if ( user.rank === r && str) {
      array.push(user.name + ":" + Number(num1 * Number(user.years) + num2));
    }
  }
  calculation("A",user.years < 5, 3000, 100000);
  calculation("A",user.years >= 5, 3000, 120000);
  calculation("B", user.years, 4000, 140000);
  calculation("C", user.years, 5000, 160000);
})

array.sort(function(a,b){
   return b.match(/\d+/) - a.match(/\d+/);
}); 

console.log(array.join("\n"));