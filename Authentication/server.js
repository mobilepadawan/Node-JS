const express = require('express')
const app = express()
const PORT = 3000 || process.env.PORT
const brcyptjs = require('bcryptjs')

app.use(express.urlencoded( {extended: false} ))
app.use(express.json())

app.post('/login', (req, res)=> {
    const user = req.body.user
    const passwd = req.body.passwd

    if (user == 'admin' && passwd == '12345') 
        res.json({message: 'Autenticación exitosa!'})
    else
        res.json({message: 'No se reconoce el usuairo y/o contraseña.'})
})

app.listen(PORT, ()=> console.log(`Servidor se está ejecutando en el puerto ${PORT}`))