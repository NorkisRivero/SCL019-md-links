const mdlinks = require ('./index.js');
const path = require('path');

let { lstatSync, readFile, existsSync } = require('fs');


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
         const expReg =  /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()!@:%_\+.~#?&\/\/=]*)/g;
        //  const array = [...data.matchAll(expReg)];
        const links = data.match(expReg);
          resolve(links);
        })
    }
      )}

 exports.convertPath = convertPath;
 exports.isFile = isFile;
 exports.verifyExtensionMD = verifyExtensionMD;
 exports.readMyFile = readMyFile;
 exports.routeExists = routeExists;
