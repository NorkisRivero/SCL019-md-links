const mdlinks = require ('./index.js');
const path = require('path');

let { lstatSync, readFile, existsSync } = require('fs');
const http = require('http');
const url = require('url');



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
        });
      })
};
    function statusLink(link) {
      return new Promise((resolve) => {
        const options = {
          method: 'HEAD',
          host: url.parse(link).host,
          port: 80,
          path: url.parse(link).pathname,
        };
    
        const req = http.request(options, (res) => {
          const nuevaData = {
            linkname: link,
            Code: res.statusCode,
            status: res.statusCode <= 399,
          };
          resolve(nuevaData);
        });
    
        req.on('error', (error) => {
          // console.error(error);
          const newData = {
            linkname: link,
            status: false,
          };
          resolve(newData);
        });
    
        req.end();
      });
    }

 exports.convertPath = convertPath;
 exports.isFile = isFile;
 exports.verifyExtensionMD = verifyExtensionMD;
 exports.readMyFile = readMyFile;
 exports.routeExists = routeExists;
 exports.statusLink = statusLink;
