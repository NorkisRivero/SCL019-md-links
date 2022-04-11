
const readline = require("readline");
const process = require('process');
const { mdLink } = require('./mdLink');


const val = process.argv;

const list = {};
let path = '';

if (val.some((x) => x === '--validate')) {
  list.validate = true;
}
if (val.some((x) => x === '--stats')) {
  list.stats = true;
}


  if (val[0] === 'mdLink') {
    path = val[1];
  } else {
    path = val[2];
  }
  mdLink(path, list).then(() => {
    console.log();
  }).catch((err) => {
    console.log(err.message);
  });