const fs = require('fs');

// const book = {
//   title: 'Strategy of Preeminence',
//   author: 'Jay Abraham',
// };

// const bookJSON = JSON.stringify(book);
// fs.writeFileSync('1-json.json', bookJSON);

const getData = fs.readFileSync('1-json.json');
const dataJSON = String(getData);
const data = JSON.parse(dataJSON);

data.name = 'Davin';
data.age = 30;

const sendData = JSON.stringify(data);

fs.writeFileSync('1-json.json', sendData);

console.log(data);

// console.log(data);
