const args = process.argv;
console.log(args);
let colorInput = '';

if (args.length > 2) {
  colorInput = args[2];
}

console.log(colorInput);

// use loop for block creation

let width = 31;
let height = 9;
let logstring = '';

for (let i = 0; i < height; i++) {
  for (let j = 0; j < width; j++) {
    if (i > 2 && j > 4 && i < 6 && j < 26) {
      logstring = logstring + ' ';
    } else {
      logstring = logstring + '#';
    }
  }

  console.log(logstring);
  logstring = '';
}
