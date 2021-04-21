//Uso de NPM Node Package Manager
//Para crear el primer package.json en nuestro proyecto node, escribir:
//npm init -y //en Mac no me funcionó este comando, solo utilicé npm init

//Si elimino la carpeta node_modules, el archivo package.json tendrá las dependencias
//necesarias. Luego, el usuario que descarga nuestro proyecto, debe escribir en la consola:
//npm i

//const {frutas, dinero} = require('./frutas')
const cowsay = require('./node_modules/cowsay')

console.log(cowsay.say({
   text: "I'm a module installed by npm",
   e: "Oo",
   T: "u"
}))

// frutas.forEach((item => {
//    console.count(item)
// }))

// console.warn(`Dinero disponible: $ ${dinero}`)

//Si queremos instalar el módulo  de forma global:
//npm insall -g cowsay (sudo + el password del usuario si estás en Linux o Mac)

/* Luego, desde la consola tipeas:
npx cowsay "El saludo que querés mostrar" */