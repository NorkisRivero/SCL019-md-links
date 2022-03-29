const cli = require("./cli.js");
const path = require("path");
const fs = require("fs");
// const mdlinks = require('./cli.js');

const readline = require("readline");

let interfazCaptura = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Pedir la ruta al usuario
interfazCaptura.question("Ingrese su ruta: ", function (route) {
  let answer = `${route}`;
  console.log(`Su ruta es: ${answer}`);

  //Verificar que la ruta existe
  if (cli.routeExists(answer)) {
    answer = cli.convertPath(answer);
    console.log("La ruta absoluta es ", answer);

    if (cli.isFile(answer)) {
      console.log("Es un archivo", answer);
      if (cli.verifyExtensionMD(answer)) {
        console.log("es un archivo .md");

          cli.readMyFile(answer).then((file) => {
            console.log(file);
            // .catch(err => console.log('error', err));
          });
        

      } 
      
      else {
        console.log("no es archivo .md");
      }
    } else {
      console.log("es un directorio");
    }
  
    

  } else {
    console.log("La ruta no existe");
  }

  
  interfazCaptura.close();
});

// module.exports = (ruta) => {
//   return readMyFile (ruta);
// };

// const readMyFile = (ruta) => {
//   return new Promise ((resolve, reject) => {
//     fs.readFile(ruta, 'utf8', (err, data) => {
//       if (err) reject (err);
//       resolve(data);
//     })

// }

// module.exports = {
//   routeExists,

//Comprobar si es directorio o archivo
