const fs = require('fs');

const addNotes = (note) => {
  fs.appendFileSync('notes.txt', note);
};
const getNotes = () => 'Your  notes...';
module.exports = addNotes;
