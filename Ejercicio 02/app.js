//exportar el módulo frutas.js a este otro archivo, para luego sí recorrerlo
// const frutero = require('./frutas') //se puede obviar la extensión, si el mismo es .JS

// frutero.forEach((item => {
//    console.count(item)
// }))

const {frutas, dinero} = require('./frutas')

frutas.forEach((item => {
   console.count(item)
}))

console.warn(`Dinero disponible: $ ${dinero}`)