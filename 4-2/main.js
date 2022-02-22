for (let i = 0; i <= 50; i++) {
  if ( i % 3 === 0 || /3/.test(i)) { 
    console.log("WOW");
  } else {
    console.log(i)
  }
}