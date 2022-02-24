for (let i = 0; i <= 50; i++) {
  if ( i % 3 === 0 || i % 10 === 3 || Math.floor(i / 10) === 3) {
    console.log("WOW");
  } else {
    console.log(i)
  }
}