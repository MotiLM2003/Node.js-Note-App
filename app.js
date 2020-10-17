const chalk = require('chalk');
const yargs = require('yargs');

// custom modules
const addNote = require('./notes');
const parsing = require('./yargs');

console.log(yargs.argv);

// Create add command

// switch (command) {
//   case 'add': {
//     const note = process.argv[3];
//     console.log(chalk.bold.inverse.blue('adding note: ', note));
//     addNote(note);
//     break;
//   }
//   case 'remove': {
//     console.log(chalk.redBright.inverse('Removing'));
//     break;
//   }

//   default: {
//     console.log('command not exists ');
//   }
// }
