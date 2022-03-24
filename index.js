// module.exports = () => {
//   // ...
// };

const readline = require('readline');

let interfazCaptura = readline.createInterface({
  input: process.stdin,
  output: process.stdout,

});

interfazCaptura.question('¿Cuál es su ruta?: ', function(answer){
  console.log(`Su ruta es: ${answer}`);

  interfazCaptura.close();

})