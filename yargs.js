const yargs = require('yargs');
const chalk = require('chalk');
const fs = require('fs');

// changing yargs version ?
yargs.version('1.2.0');

// Create add command
yargs.command({
  command: 'add',
  describe: 'Add new note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string',
    },
    body: {
      describe: 'note body content',
      demandOption: true,
      type: 'string',
    },
  },
  handler: ({ title, body }) => {
    fs.appendFileSync('notes.txt', `\nTitle ${title} - Body: ${body}`);
  },
});

// Create remove command
yargs.command({
  command: 'remove',
  describe: 'remove a note',
  handler: () => {
    console.log(chalk.red.bold.inverse('item removed'));
  },
});

// Create read command
yargs.command({
  command: 'read',
  describe: 'read a note',
  handler: () => {
    console.log(chalk.blue.bold.inverse('reading a note'));
  },
});

// Create  list command

yargs.command({
  command: 'list',
  describe: 'list',
  handler: () => {
    console.log(chalk.yellow.bold.inverse('listing out all notes'));
  },
});
