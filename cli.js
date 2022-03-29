const mdlinks = require ('./index.js');
const path = require('path');

let { lstatSync, readFile, existsSync } = require('fs');


// const path = process.argv[2];

// mdlinks(path)
// .then(file => console.log(file))
// .catch(err => console.log('error', err));

// Comprobar que la ruta exista 
const routeExists = (answer) => existsSync(answer); 


//Convierte la ruta en absoluta
 const convertPath = (answer) => (path.isAbsolute(answer) ? answer : path.resolve(answer)); 


 //Ver si la ruta es un archivo
 const isFile = (answer) => lstatSync(answer).isFile(); 

// verifico la extensión del archivo
const verifyExtensionMD = (resp) => path.extname(resp) === '.md';


const readMyFile = (answer) => {
      return new Promise ((resolve, reject) => {
        readFile(answer, 'utf8', (err, data) => {
          if (err) reject (err);
          resolve(data);
        })
    }
      )}

 exports.convertPath = convertPath;
 exports.isFile = isFile;
 exports.verifyExtensionMD = verifyExtensionMD;
 exports.readMyFile = readMyFile;
 exports.routeExists = routeExists;
