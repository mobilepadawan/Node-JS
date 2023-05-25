let arrayUsuario = [{"id": 1, "nombre": "Educacion IT"},{"id": 2, "nombre": "Fernando Luna"},{"id": 3,"nombre": "Ferpro Online"},{"id": 4,"nombre": "Pepe Argento"},{"id": 5,"nombre": "Julian Conte"},{"id": 6,"nombre": "Nicolas Mariano"}]

const express = require("express")
const PORT = process.env.PORT || 3050
const app = express()

        app.use(express.json())
        app.listen(PORT, ()=> console.log(`Servidor web escuchando en el puerto ${PORT}`))

        app.get("/", (req, res)=> {
            res.send("Bienvenidos a nuestra API.")
        })

        app.get("/empresa", (req, res)=> {
            res.send("ENDPOINT que apunta a la sección Empresa.")
        })

        app.get("/about", (req, res)=> {
            const JSONabout = {
                "appName": "Aplicación web de servidor",
                "Copyright": "Tem JS Avanzado",
                "Version": "2.9.2021"
            }
            res.send([JSONabout])
        })

        app.get("/usuarios", (req, res)=> {
            res.send(arrayUsuario)
        })

        app.get("/usuario/:id/:nombre", (req, res)=> {
            const id = req.params.id
            const usr = arrayUsuario.find(u => u.id == id)

            res.send([usr])
        })

        app.get("/error", (req, res)=> {
            const HTML = `<head>
                            <meta charset="utf-8">
                            <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, user-scalable=yes">
                            <title>Error de Servidor</title>
                            <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
                            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
                            <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
                        </head>
                        <body class="red darken-4">
                            <div class="center white-text">
                                <h1>Error 404</h1>
                                <div><i class="material-icons large">warning</i></div>
                                <p>No se ha podido obtener el recurso solicitado del servidor.</p>
                            </div>
                        </body>`
            res.send(HTML)
        })

        app.get("*", (req, res)=> {
            res.redirect("/error")
        })