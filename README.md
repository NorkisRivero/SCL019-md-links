# Markdown Links - Norkis Rivero

## Índice
* [1. Diagrama de Flujo](#1-diagrama-de-flujo)
* [2. Características de la librería](#2-características-de-la-librería)
* [2. Cómo usarla](#2-cómo-usarla)




***

## 1. Diagrama de flujo

![imagenes](imagenes\diagrama.jpg)



## 2. Características de la librería

Este proyecto es una librería que permitirá recorrer archivos .md para verificar si tiene o no links, y si esos links son válidos o no, el código fue creado en JavaScript por nodejs.

## 3. Cómo usarla

### Instalación 

npm i md-links-norkis

### En la librería, colocar:

 const mdLink = require('md-links-norkis');

 ### Opciones de búsqueda de link

 En la terminal se ejecuta con el siguiente comando

 index <Ruta> [Opciones]


A continuación mostraré un ejemplo del resultado con la ruta prueba.md.


 Si ingresamos la ruta sin ninguna opción (--validate, --stats), la consola arroja la siguiente información:

 ![imagenes](imagenes\soloruta.png)

 PS C:\Users\naile\Desktop\laboratoria\proyectos\SCL019-md-links> node index prueba.md

La ruta absoluta es  C:\Users\naile\Desktop\laboratoria\proyectos\SCL019-md-links\prueba.md
Es un archivo C:\Users\naile\Desktop\laboratoria\proyectos\SCL019-md-links\prueba.md
es un archivo .md

PS C:\Users\naile\Desktop\laboratoria\proyectos\SCL019-md-links>

Si se ingresa la ruta más la opción --validate:

![imagenes](imagenes\rutaconvalidate.png)

Si se ingresa la ruta más la opción --stats:

![imagenes](imagenes\rutaconstats.png)

Al ingresar la ruta más las opciones --validate --stats:

![imagenes](imagenes\rutaconambasopciones.png)



### Autora

Norkis Rivero.