import chalk from 'chalk';
import Color from 'color';

const args = process.argv;

let hueSelection = '';
let luminositySelection = '';

if (args.length > 2) {
  hueSelection = args[2];
}

if (args.length > 3) {
  luminositySelection = args[3];
}

// construct random color first
function generateRandomColorHex() {
  return (
    '#' +
    ('00000' + Math.floor(Math.random() * Math.pow(16, 6)).toString(16)).slice(
      -6,
    )
  );
}

let colorSelection = Color(generateRandomColorHex());

console.log('Raw random color: ' + colorSelection);

// modify color if necessary

function modifyRandomRange(min, max) {
  return Math.random() * (max - min) + min;
}

console.log(modifyRandomRange(0.2, 0.7));

if (hueSelection) {
  // using a try here in case the user enters "pizza" or something else as color
  try {
    colorSelection = Color(colorSelection.mix(Color(hueSelection)));
  }
  catch (Error){
  }
}
console.log('Color after hue: ' + colorSelection);

if (luminositySelection) {
  if (luminositySelection === 'dark') {
    colorSelection = Color(colorSelection.darken(modifyRandomRange(0.1, 0.7)));
  } else if (luminositySelection === 'light') {
    colorSelection = Color(colorSelection.lighten(modifyRandomRange(0.1, 0.7)));
  }
}
console.log('Color after luminosity: ' + colorSelection);

let finalColor = colorSelection.hex();
console.log('final color: ' + finalColor);

// use loop for block creation

let width = 31;
let height = 9;
let logstring = '';

for (let i = 0; i < height; i++) {
  for (let j = 0; j < width; j++) {
    if (i === 4 && j === 12) {
      logstring = logstring + finalColor;
      j += 6;
    } else if (i > 2 && j > 4 && i < 6 && j < 26) {
      logstring = logstring + ' ';
    } else {
      logstring = logstring + '#';
    }
  }

  console.log(chalk.hex(finalColor)(logstring));
  logstring = '';
}
