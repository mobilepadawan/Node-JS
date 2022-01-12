const path = require('path')
const express = require('express')
const exp = require('constants')
const port = process.env.port || 3000
const app = express()

app.use('/public', express.static(path.join(__dirname, 'index.html')))
app.set('view engine', 'ejs')

//ROUTES
app.get('/', (req, res) => {
   res.send('Mi respuesta desde Express')
})

app.get('/:userQuery', (req, res) => {
   res.render('index', {data : {userQuery: req.params.userQuery, 
                                searchResults: ['Libro 1', 'Libro 2', 'Libro 3', 'Libro 4', 'Libro 5', 'Libro 6', 'Libro 7', 'Libro 8', 'Libro 9', 'Libro 10']}})
})



app.listen(port, ()=> {
   console.log(`Servidor disponible en el puerto ${port}`)
})