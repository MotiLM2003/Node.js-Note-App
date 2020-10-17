const addNote = require('./notes');
const chalk = require('chalk');

const command = process.argv[2];
console.log(process.argv);
switch (command) {
  case 'add': {
    const note = process.argv[3];
    console.log(chalk.bold.inverse.blue('adding note: ', note));
    addNote(note);
    break;
  }
  case 'remove': {
    console.log(chalk.redBright.inverse('Removing'));
    break;
  }

  default: {
    console.log('command not exists ');
  }
}
