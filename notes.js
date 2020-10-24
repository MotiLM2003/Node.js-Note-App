const chalk = require('chalk');
const fs = require('fs');

const addNote = (title, body) => {
  const notes = loadNotes();
  const duplicateNote = notes.find((note) => note.title === title);

  if (duplicateNote) {
    console.log(
      chalk.red.inverse.bold('Faild to add a note, note title already exists.')
    );
  } else {
    notes.push({ title: title, body: body });
    saveNotes(notes);
    console.log(
      chalk.green.inverse.bold(`New note added with the title: ${title}`)
    );
  }
};

const removeNote = (title) => {
  const oldNotes = loadNotes();
  const notes = oldNotes.filter((note) => note.title != title);
  if (notes.length !== oldNotes.length) {
    saveNotes(notes);
    console.log(chalk.inverse.green('Removed'));
  } else {
    console.log(chalk.inverse.red("Note didn't removed!"));
  }
};

const listNotes = () => {
  const notes = loadNotes();
  if (notes.length === 0) {
    console.log(chalk.red.inverse.bold('There are no notes currently saved.'));
  } else {
    console.log(chalk.whiteBright.inverse.bold('Your notes:'));
    notes.forEach((note) => console.log(chalk.green(`title: ${note.title}`)));
  }
};

const readNote = (title) => {
  const note = loadNotes().find((note) => note.title === title);
  if (!note) {
    console.log(chalk.red.inverse('Can not found note.'));
  } else {
    console.log(chalk.green.bold.inverse('Note body:'));
    console.log(chalk.yellow.inverse.bold(note.body));
  }
};

//  **** HELPERS **** \\

// saving not to notes.json file
const saveNotes = (notes) => {
  fs.writeFileSync('notes.json', JSON.stringify(notes));
};

//  loading notes.json from the file system. if file not exists return new empty array.
const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync('notes.json');
    const data = JSON.parse(dataBuffer.toString());
    return data;
  } catch (e) {
    return [];
  }
};

module.exports = {
  addNote: addNote,
  removeNote,
  listNotes,
  readNote,
};
