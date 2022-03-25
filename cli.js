const mdlinks = require ('./index.js');
const path = require('path');

// const path = process.argv[2];

// mdlinks(path)
// .then(file => console.log(file))
// .catch(err => console.log('error', err));


//Convierte la ruta en absoluta
 const convertPath = (answer) => (path.isAbsolute(answer) ? answer : path.resolve(answer)); 




 exports.convertPath = convertPath;