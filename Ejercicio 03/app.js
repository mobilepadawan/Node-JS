//Uso de NPM Node Package Manager
//Para crear el primer package.json en nuestro proyecto node, escribir:
//npm init -y //en Mac no me funcionó este comando, solo utilicé npm init


const {frutas, dinero} = require('./frutas')

frutas.forEach((item => {
   console.count(item)
}))

console.warn(`Dinero disponible: $ ${dinero}`)