const array_dan = process.argv[2]

const asterisk = Math.floor((2 * array_dan - 1) / 2);

for (let i = 0; i < array_dan; i++) {
  let result = '';

  for (let j = 0; j < 2 * (array_dan - 1) + 1; j++) {
    if (asterisk - i <= j && asterisk + i >= j) {
      result += '*';
    } else {
      result += ' ';
    }
  }
  console.log(result);
}