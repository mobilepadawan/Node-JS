const fs = require('fs');

//VALIDAR SI EXISTE UN ARCHIVO (EN EL RAIZ DEL PROYECTO
function fileExists(filename) {
    const existe = fs.existsSync(filename.trim());
          return existe ? true : false;
}
//CREAR ARCHIVO, VALIDANDO PREVIAMENTE QUE NO EXISTA
function crearArchivo(filename, content) {
    const archivo = `${filename.trim()}.txt`;

    if (fileExists(archivo)) {
        console.error('El archivo existe. No se puede sobreescribir.');
    } else {
        fs.writeFile(archivo , content.trim(), (error) => {
            if (error) {
                console.error(error);
                return;
            }
            console.log('El archivo se ha creado correctamente.');
          });
    }
}

//LEER UN ARCHIVO
function leerArchivo(filename) {
    fs.readFile(filename.trim(), 'utf-8', (error, data) => {
        if (error) {
          console.error(error);
          return;
        }
        console.log(data);
      });
}

// leerArchivo("myfile.txt");

function agregarContenido(filename, content) {
    const archivo = `${filename.trim()}`;
    const texto = content.trim();

    fs.appendFile(archivo, texto, (error) => {
        if (error) {
          console.error(error);
          return;
        }
        console.log('Se agregó contenido al archivo.');
      });
}

let texto = "Este es el nuevo contenido que deseo agregar en un archivo ya existente."

// agregarContenido("myfile.txt", texto);

function eliminarArchivo(filename) {
    fs.unlink(filename.trim(), (error) => {
        if (error) {
          console.error(error);
          return;
        }
        console.log(`El archivo ${filename} se ha eliminado correctamente.`);
      });
}

// eliminarArchivo("myfile.txt");

//CREAR UN DIRECTORIO
// fs.mkdir('prueba', (err) => {
//   if (err) {
//     console.error(err);
//   } else {
//     console.log('Directorio creado con éxito');
//   }
// });

// fs.readdir('/', (err, files) => {
//   if (err) {
//     console.error(err);
//   } else {
//     console.log(files);
//   }
// });

// fs.readdir('/', (err, files) => {
//   if (err) {
//     console.error(err);
//   } else {const fs = require('fs');
//     console.log(files);
//   }
// });

// fs.rename('prueba', 'nueva-prueba', (err) => {
//   if (err) {
//     console.error(err);
//   } else {
//     console.log('Directorio renombrado con éxito');
//   }
// });