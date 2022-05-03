import chalk from 'chalk';
import Color from 'color';
import * as readline from 'node:readline';

const args = process.argv;

const width = 31;
const height = 9;
let logstring = '';

let hueSelection = '';
let luminositySelection = '';
let finalColor = '';

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

// modify color if necessary

function modifyRandomRange(min, max) {
  return Math.random() * (max - min) + min;
}

function setFinalColor(colorValue) {
  finalColor = Color(colorValue).hex();
}

function handleColorChanges() {
  if (hueSelection) {
    // using a try here in case the user enters "pizza" or something else as color
    try {
      colorSelection = Color(colorSelection.mix(Color(hueSelection)));
    } catch (Error) {}
  }

  if (luminositySelection) {
    if (luminositySelection === 'dark') {
      colorSelection = Color(
        colorSelection.darken(modifyRandomRange(0.1, 0.7)),
      );
    } else if (luminositySelection === 'light') {
      colorSelection = Color(
        colorSelection.lighten(modifyRandomRange(0.1, 0.7)),
      );
    }
  }

  setFinalColor(colorSelection);
}

function drawOutput(hashHeight, hashWidth) {
  for (let i = 0; i < hashHeight; i++) {
    for (let j = 0; j < hashWidth; j++) {
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
}

function getUserInput() {
  const prompt = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  prompt.question(`Please enter a hex color: `, (aColor) => {
    if (aColor.length !== 7 && aColor[0] !== '#') {
      console.log('invalid color, defaulting to grey');
      aColor = '#fefefe';
    } else {
      console.log(`You entered ${aColor}!`);
    }
    setFinalColor(aColor);
    drawOutput(height, width);
    prompt.close();
  });
}

if (hueSelection === 'ask') {
  getUserInput();
}
handleColorChanges();
drawOutput(height, width);
