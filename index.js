#!/usr/bin/env node

// const process = require('process');
const { mdLink } = require('./mdLink');


const val = process.argv;

const options = {};
let path = '';

if (val.some((x) => x === '--validate')) {
  options.validate = true;
}
if (val.some((x) => x === '--stats')) {
  options.stats = true;
}


  if (val[0] === 'mdLink') {
    path = val[1];
  } else {
    path = val[2];
  }
  
  mdLink(path, options).then(() => {
    console.log();
  }).catch((err) => {
    console.log(err.message);
  });