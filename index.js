const cli = require('./cli.js')
const path = require('path');
 
const fs = require('fs');

const readline = require('readline');


// Comprobar que la ruta exista 
const routeExists = (answer) => fs.existsSync(answer); 




let interfazCaptura = readline.createInterface({
  input: process.stdin,
  output: process.stdout

});

interfazCaptura.question('Ingrese su ruta: ', function(route){
  let answer = `${route}`;
  console.log(`Su ruta es: ${answer}`);

if (routeExists(answer)) { 
  answer = cli.convertPath(answer);
  console.log('la nueva ruta es...', answer);

}
else {
  console.log('La ruta no existe');
}

interfazCaptura.close();
}


// module.exports = (ruta) => {
//   return readMyFile (ruta); 
// };

// const readMyFile = (ruta) => {
//   return new Promise ((resolve, reject) => {
//     fs.readFile(ruta, 'utf8', (err, data) => {
//       if (err) reject (err);
//       resolve(data);
//     })
//   })
// }



// module.exports = {
//   routeExists,
)


//Comprobar si es directorio o archivo
