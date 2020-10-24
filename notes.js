const fs = require('fs');

const addNote = (title, body) => {
  const notes = loadNotes();
};

const getNotes = () => 'Your  notes...';

const loadNotes = () => {
  const dataBuffer = fs.readFileSync('notes.json');
  const data = JSON.parse(dataBuffer.toString());

  return data;
};

module.exports = {
  getNotes: getNotes,
  addNote: addNote,
};
