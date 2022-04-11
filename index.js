const cli = require("./cli.js");
const path = require("path");
const fs = require("fs");
// const mdlinks = require('./cli.js');
const readline = require("readline");
const { url } = require("inspector");


const arrayJson = [];
const arrayLink = [];
const val = process.argv;

const list = {};

if (val.some((x) => x === '--validate')) {
  list.validate = true;
}
if (val.some((x) => x === '--stats')) {
  list.stats = true;
}

let interfazCaptura = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Pedir la ruta al usuario
// interfazCaptura.question("Ingrese su ruta: ", function (route) {
//   let answer = `${route}`;
//   console.log(`Su ruta es: ${answer}`);

  //Verificar que la ruta existe
  let answer = val[2]
  if (cli.routeExists(answer)) {
    answer = cli.convertPath(answer);
    console.log("La ruta absoluta es ", answer);

    if (cli.isFile(answer)) {
      console.log("Es un archivo", answer);

      if (cli.verifyExtensionMD(answer)) {
        console.log("es un archivo .md");

          cli.readMyFile(answer).then((file) => {
            file.forEach((url) => {
              const forLinks = {
                href: url,
                text: url[4],
                file: answer
              }
             arrayLink.push(forLinks);
            })
            console.log('array de link', arrayLink);
            return arrayLink;
          })
            .then((arrayLink) => {
              const promiseArr = arrayLink.map((url) => cli.statusLink(url.href))
              return Promise.all(promiseArr);
            
            })

          .then((url) => {
            console.log(url);
            return url
          })
       
        .then((url) => {
            let countValid = 0;
            let countInvalid = 0;
            if (list.validate && list.stats) {
              url.forEach((e) => {
                if (e.status) {
                  countValid += 1;
                } else {
                  countInvalid += 1;
                }
                
              });
              console.log('Link Válidos', countValid);
                console.log('Link inválidos', countInvalid);
            }
          })
      
      }                                  
      else {
        console.log("no es archivo .md");
      }

    } else {
      console.log("es un directorio", );
    }
  
  } else {
    console.log("La ruta no existe");
  }

  
// interfazCaptura.close();
//   });