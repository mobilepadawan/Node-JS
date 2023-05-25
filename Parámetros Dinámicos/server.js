const express = require('express');
const cursos = require('./cursos');
const app = express();
const dotenv = require('dotenv');
      dotenv.config();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.header("Content-Type", "application/text");
    res.send('Bienvenid@s al servidor web con rutas dinámicas!'); 
});

app.get('/cursos/:categoria', (req, res) => {
  let parametro = req.params.categoria.trim().toLowerCase();
      if (parametro !== "") {
        let resultado = [];
            for (let curso of cursos) {
              if (curso.categoria.toLowerCase() == parametro) {
                  resultado.push(curso)
              }
            }
            res.header("Content-Type", "application/json");
            resultado.length > 0 ? 
              res.json(resultado) : 
              res.json([{id: 'Error', descripcion: 'No se encontraron coincidencias.'}]);
      }
});

app.get('/cursos', (req, res) => {
  const queryParams = Object.keys(req.query);
      if (queryParams.length === 0) {
          res.json(cursos);
      } else {
        let resultado = [];
            for (let curso of cursos) {
                if (curso.nombre.toLowerCase().includes(req.query.nombre.toLowerCase()) 
                    && curso.categoria.toLowerCase().includes(req.query.categoria.toLowerCase())) {
                    resultado.push(curso)
                }
            }
            res.header("Content-Type", "application/json");
            resultado.length > 0 ? 
            res.json(resultado) : 
            res.json([{id: 'Error', descripcion: 'No se encontraron coincidencias.'}]);
      }
});

/*
################################################################################################

DE AQUÍ EN ADELANTE TENEMOS LA RESOLUCIÓN A LA ACTIVIDAD PROPUESTA DE CREACIÓN DE ENDPOINTS
SEGUIMOS UTILIZANDO EL PROYECTO DE EJEMPLO DE CURSOS, DONDE AGREGAMOS ENDRPOINTS PARA BUSCAR
POR ID Y POR NOMBRE.

################################################################################################
*/
app.get('/curso/codigo/:id', (req, res) => {
  let codigo = parseInt(req.params.id);
    console.log('Código recibido:', codigo)
      if (typeof codigo === 'number') {
        let resultado = [];
            for (let curso of cursos) {
              if (curso.id === codigo) {
                  resultado.push(curso)
                  break
              }
            }
            res.header("Content-Type", "application/json");
            resultado.length > 0 ? 
              res.json(resultado) : 
              res.json([{id: 'Error', descripcion: 'No se encontraron coincidencias.'}]);
      }
});

app.get('/curso/nombre/:nombre', (req, res) => {
  let parametro = req.params.nombre.trim().toLowerCase();
      console.log('parámetro recibido:', parametro)
      if (parametro !== "") {
        let resultado = [];
            for (let curso of cursos) {
              if (curso.nombre.toLowerCase().includes(parametro)) {
                  resultado.push(curso)
              }
            }
            res.header("Content-Type", "application/json");
            resultado.length > 0 ? 
              res.json(resultado) : 
              res.json([{id: 'Error', descripcion: 'No se encontraron coincidencias.'}]);
      }
});
/*
################################################################################################
                        FIN DE LA RESOLUCIÓN DE LA ACTIVIDAD PROPUESTA.
################################################################################################
*/

app.get('*', (req, res) => {
  res.header("Content-Type", "application/json");
  res.status(404).send('Lo siento, la página que buscas no existe.'); 
});

// Inicia el servidor
  app.listen(PORT, () => {
    console.log(`Servidor iniciado en el puerto ${PORT}`);
  });
