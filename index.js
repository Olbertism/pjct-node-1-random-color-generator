import chalk from 'chalk';

const args = process.argv;
console.log(args);
let colorSelection = '';

if (args.length > 2) {
  colorSelection = args[2];
} else {
  colorSelection = Math.floor(Math.random()*16777215).toString(16);
}

console.log(colorSelection);

// use loop for block creation

let width = 31;
let height = 9;
let logstring = '';

for (let i = 0; i < height; i++) {
  for (let j = 0; j < width; j++) {
    if (i === 4 && j === 12) {
      logstring = logstring + '#' + colorSelection;
      j += 6;

    } else if (i > 2 && j > 4 && i < 6 && j < 26) {
      logstring = logstring + ' ';
    } else {
      logstring = logstring + '#';
    }
  }

  console.log(chalk.hex('#' + colorSelection)(logstring));
  logstring = '';
}
