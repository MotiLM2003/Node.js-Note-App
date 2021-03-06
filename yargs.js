const yargs = require('yargs');
const chalk = require('chalk');
const fs = require('fs');

const notes = require('./notes');

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
    notes.addNote(title, body);
  },
});

// Create remove command
yargs.command({
  command: 'remove',
  builder: {
    title: {
      describe: 'note title to remove',
      demandOption: true,
      type: 'string',
    },
  },
  describe: 'remove a note',
  handler: ({ title }) => {
    notes.removeNote(title);
  },
});

// Create read command
yargs.command({
  command: 'read',
  describe: 'read a note',
  builder: {
    title: {
      describe: 'note title',
      demandOption: true,
      type: 'string',
    },
  },
  handler: ({ title }) => {
    notes.readNote(title);
  },
});

// Create  list command

yargs.command({
  command: 'list',
  describe: 'list',
  handler: () => {
    notes.listNotes();
  },
});
