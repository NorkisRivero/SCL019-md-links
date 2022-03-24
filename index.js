const path = require('path');
 
const fs = require('fs');

const readline = require('readline');

const pathExists = (answer) => fs.existsSync(answer); // Verifying if path exists


let interfazCaptura = readline.createInterface({
  input: process.stdin,
  output: process.stdout

});

interfazCaptura.question('Ingrese su ruta: ', function(route){
  let answer = `${route}`;
  console.log(`Su ruta es: ${answer}`);

 
if (pathExists(answer)) { 
  console.log('La ruta existe');
}
 else {
   console.log('La ruta no existe');
 }
interfazCaptura.close();



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
})