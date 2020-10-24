const chalk = require('chalk');
const fs = require('fs');

const addNote = (title, body) => {
  const notes = loadNotes();
  // notes.filter((note) => {
  //   retnote.title === title ? console.log('note found') : console.log('new note');

  // });
  if (notes.filter((note) => note.title === title).length > 0) {
    console.log(
      chalk.red.inverse.bold('Faild to add a note, note title already exists.')
    );
    return;
  }
  notes.push({ title: title, body: body });
  saveNotes(notes);
  console.log(
    chalk.green.inverse.bold(`New note added with the title: ${title}`)
  );
};

const saveNotes = (notes) => {
  fs.writeFileSync('notes.json', JSON.stringify(notes));
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
const getNotes = () => loadNotes();
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
  getNotes: getNotes,
  addNote: addNote,
  removeNote,
};
