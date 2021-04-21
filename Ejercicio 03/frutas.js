//const frutas = ['Banana', 'Manzana', 'Pera', 'Banana', 'Frutilla', 'Pomelo']

//module.exports = frutas
//versión ES6 sería 
//export default frutas

const frutas = ['Banana', 'Manzana', 'Pera', 'Banana', 'Frutilla', 'Pomelo']
const dinero = 1000

//Si agregamos otra constante a este archivo
//debemos abrir {}, exportando un tipo de objeto
module.exports = {
   frutas: frutas,
   dinero: dinero
}

// Y su versión para exportar vía ES6, sería:
//export const frutas = frutas
//export const dinero = dinero