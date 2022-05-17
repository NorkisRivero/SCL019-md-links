const cli = require('./cli.js');
const color = require('colors/safe');

const mdLink = (path, options) => {
  console.log();
  return new Promise((resolve) => {
    let answer = path;
    let arrayLink = [];

    if (cli.routeExists(answer)) {
      answer = cli.convertPath(answer);
      console.log(color.green("La ruta absoluta es ", answer));

      if (cli.isFile(answer)) {
        console.log(color.blue("Es un archivo", answer));

        if (cli.verifyExtensionMD(answer)) {
          console.log(color.yellow("Es un archivo .md"));

          cli.readMyFile(answer).then((file) => {
            file.forEach((url) => {
              const forLinks = {
                href: url,
                text: url[4],
                file: answer
              }
              arrayLink.push(forLinks);
            })
            //   console.log('array de link', arrayLink);
            return arrayLink;
          })
            .then((arrayLink) => {
              const promiseArr = arrayLink.map((url) => cli.statusLink(url.href))
              return Promise.all(promiseArr);

            })

            .then((url) => {
              //   console.log(url);
              return url
            })

            .then((url) => {
              let countValid = 0;
              let countInvalid = 0;
              if (options.validate && options.stats) {
                url.forEach((e) => {
                  if (e.status) {
                    countValid += 1;
                  } else {
                    countInvalid += 1;
                  }

                });
                console.log(color.yellow('Link encontrados:', url.length));
                console.log(color.green('Link Válidos', countValid));
                console.log(color.red('Link inválidos', countInvalid));
                console.log(url);


              }
              else {
                if (options.validate) {
                  console.log(url);
                }
                if (options.stats) {
                  url.forEach((e) => {
                    if (e.status) {
                      countValid += 1;
                    } else {
                      countInvalid += 1;
                    }

                  });
                  console.log(color.yellow('Link encontrados:', url.length));
                  console.log(color.green('Link Válidos:', countValid));
                  console.log(color.red('Link inválidos:', countInvalid));

                }
              }
              resolve(url)
            })

        }
        else {
          console.log(color.red("No es archivo .md"));
        }

      } else {
        console.log(color.yellow("Es un directorio"));
      }

    } else {
      console.log(color.red("La ruta no existe"));
    }

  }

  )
};

module.exports = { mdLink };