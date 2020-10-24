const fs = require('fs');

const addNote = (title, body) => {
  const notes = loadNotes();
  // notes.filter((note) => {
  //   retnote.title === title ? console.log('note found') : console.log('new note');

  // });
  if (notes.filter((note) => note.title === title).length > 0) {
    console.log('found note');
    return;
  }
  console.log('tres');
  notes.push({ title: title, body: body });
  saveNotes(notes);
};

const saveNotes = (notes) => {
  fs.writeFileSync('notes.json', JSON.stringify(notes));
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
};
