const cli = require('../cli.js');
const p1 = 'README.md';
const p2 = 'prueba.txt';
const p3 = 'holahola.md';
const p4 = 'C:\\Users\\naile\\Desktop\\laboratoria\\proyectos\\SCL019-md-links\\README.md';

 
describe('La función readExtension ', () => {

  it('Devuelve true si la extension del archivo es .md', () => {
    console.log(p1);
    expect(cli.verifyExtensionMD(p1)).toBe(true);
  });
 
  it('Devuelve false si la extension del archivo no es .md', () => {
    console.log(p2);

    expect(cli.verifyExtensionMD(p2)).toBe(false);
  });



  describe('La función routeExists ', () => {

    it('Devuelve true si existe la ruta', () => {
      console.log(p1);
      expect(cli.routeExists(p1)).toBe(true);
    });
   
    it('Devuelve false si no existe la ruta', () => {
      console.log(p3);
  
      expect(cli.routeExists(p3)).toBe(false);
    });

  })

  describe('La función convertPath', () => {

    it(`Transforma la ruta relativa ${p1} en absoluta`, () => {
      console.log(p1);
      expect(cli.convertPath(p1)).toBe('C:\\Users\\naile\\Desktop\\laboratoria\\proyectos\\SCL019-md-links\\README.md');
    });
   
    it(`Transforma la ruta relativa ${p2} en absoluta`, () => {
      console.log(p2);
  
      expect(cli.convertPath(p2)).toBe('C:\\Users\\naile\\Desktop\\laboratoria\\proyectos\\SCL019-md-links\\prueba.txt');
    });

  })

});