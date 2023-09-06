import { argv, stdin as input, stdout as output } from 'node:process';
import * as readline from 'node:readline';
import chalk from 'chalk';
import randomColor from 'randomcolor';

const userFirstArgument = argv[2];
const userSecondArgument = argv[3];
let boxColor = '';
let box = ``;
let selectedColor = ``;

console.log(`userHue/argv[3]: ${userFirstArgument}`);
console.log(`userLuminosity/argv[4]: ${userSecondArgument}`);

if (userFirstArgument === 'ask') {
  console.log(`Please specify your desired hue and luminosity.`);

  const rl = readline.createInterface({ input, output });

  const answerHue = await new Promise((resolve) => {
    rl.question('Hue: ', resolve);
  });

  const answerLuminosity = await new Promise((resolve) => {
    rl.question('Luminosity: ', resolve);
  });

  console.log(`
  Thank you for your your answer. \r\n
  Here's your selection:
  Hue: ${answerHue}
  Luminosity: ${answerLuminosity}`);

  rl.close();
  if (answerLuminosity && answerHue) {
    // Hue and luminosity provided by user
    selectedColor = randomColor({
      luminosity: answerLuminosity,
      hue: answerHue,
    });
  } else if (answerLuminosity) {
    // Luminosity provided by user
    selectedColor = randomColor({
      luminosity: answerLuminosity,
      hue: 'random',
    });
  } else if (answerHue) {
    // Hue provided by user
    selectedColor = randomColor({
      hue: answerHue,
      luminosity: 'random',
    });
  }
} else if (userFirstArgument && userSecondArgument) {
  // Hue and luminosity provided by user

  selectedColor = randomColor({
    luminosity: userSecondArgument,
    hue: userFirstArgument,
  });
} else if (userFirstArgument) {
  // Hue provided by user

  selectedColor = randomColor({
    hue: userFirstArgument,
    luminosity: 'random',
  });
} else {
  // No arguments or "ask" provided by user
  selectedColor = randomColor();
}

boxColor = chalk.hex(selectedColor);

// Create box containing generated colors hex value
box = `
        ###############################
        ###############################
        ###############################
        #####                     #####
        #####       ${selectedColor}       #####
        #####                     #####
        ###############################
        ###############################
        ###############################`;

// Print box to console
console.log(boxColor(box));

// --------------Misc stuff------------------

// ---  hue given  ---
// 1. generate color by user input
// 2. overwrite hsv hue value with given hue
// 3. set console.log to given color
// 4. print box

// ---

// 1. luminosity given
// 2. generate random hsv
// 3. overwrite hsv hue value with given hue
// 3. set console.log to given color
// print box

// // print process.argv
// argv.forEach((val, index) => {
//   console.log(`${index}: ${val}`);
// });

// this dynamic box is gonna be hard af
// print box top
// for (let columnCount = 1; columnCount < 11; columnCount++) {
//   process.stdout.write('#');
// }
