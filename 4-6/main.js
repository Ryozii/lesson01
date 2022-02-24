const s = process.argv[2]

let time = s.slice(0, 2);
let minutes = s.slice(3);
let result_time = Number(time) + 1
let result_minutes = Number(minutes) + 45

function result () {
  if ( result_minutes >= 60 ) {
    if( result_time >= 24) {
      console.log(result_time - 24)
      console.log(result_minutes - 60)
      return;
    }
    console.log(result_time)
    console.log(result_minutes - 60)
  } else {
    console.log(Number(time))
    console.log(result_minutes)
  }
}

result();