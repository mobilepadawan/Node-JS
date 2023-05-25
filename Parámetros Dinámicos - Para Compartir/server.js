const express = require('express');
const cursos = require('./cursos');
const app = express();
const dotenv = require('dotenv');
      dotenv.config();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
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
            resultado.length > 0 ? 
            res.json(resultado) : 
            res.json([{id: 'Error', descripcion: 'No se encontraron coincidencias.'}]);
      }
});
/*
################################################################################################
          A PARTIR DE AQUÍ, AGREGA EL CÓDIGO CORRESPONDIENTE AL DESAFÍO PROPUESTO
################################################################################################
*/

app.get('*', (req, res) => {
  res.status(404).send('Lo siento, la página que buscas no existe.'); 
});

// Inicia el servidor
  app.listen(PORT, () => {
    console.log(`Servidor iniciado en el puerto ${PORT}`);
  });