const mdlinks = require ('./index.js');
const path = require('path');
let { lstatSync, readdirSync } = require('fs');


// const path = process.argv[2];

// mdlinks(path)
// .then(file => console.log(file))
// .catch(err => console.log('error', err));


//Convierte la ruta en absoluta
 const convertPath = (answer) => (path.isAbsolute(answer) ? answer : path.resolve(answer)); 


 //Ver si la ruta es un archivo
 const isFile = (answer) => lstatSync(answer).isFile(); 

// verifico la extensión del archivo
const verifyExtensionMD = (resp) => path.extname(resp) === '.md';

// // Leyendo directories
// const readDirectory = (route) => readdirSync(route); 


 exports.convertPath = convertPath;
 exports.isFile = isFile;
 exports.verifyExtensionMD = verifyExtensionMD;
 exports.readDirectory = readDirectory;