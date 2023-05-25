const express = require('express');
const app = express();
const path = require('path');
const dotenv = require('dotenv');
      dotenv.config();
const PORT = process.env.PORT || 3000

app.set('view engine', 'ejs');
app.use(express.static('views'));

app.get('/', (req, res) => {
    const data = {
        title: 'Mi sitio web con EJS',
        message: 'Bienvenido a mi sitio web generado a partir de un motor de plantillas.',
        products: [{ name: 'Notebook Lenovo', price: 720 },
                    { name: 'Macbook Air 13', price: 1250 },
                    { name: 'Tablet Droid 10.1', price: 350 }]
    };
    res.render('index', data);
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});