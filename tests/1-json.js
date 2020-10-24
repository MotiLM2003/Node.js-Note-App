const fs = require('fs');

const user = JSON.parse(fs.readFileSync('1-json.json').toString());
const test = { ...user, name: 'test', age: '37' };
console.log(test);
fs.writeFileSync('1-json.json', JSON.stringify(user));
