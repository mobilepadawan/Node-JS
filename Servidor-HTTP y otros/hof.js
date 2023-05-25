// function realizarCalculo(numA, numB, salida) {
//     salida(numA * numB)
// }

// realizarCalculo(21, 75, console.log)

// const productos = [{id: 1, nombre: 'Notebook 14" FHD', importe: 115000, categoria: 'Portátil'},
//                    {id: 2, nombre: 'Tablet PAD 9.7"', importe: 195000, categoria: 'Tablet'},
//                    {id: 3, nombre: 'Macbook Air 13', importe: 745000, categoria: 'Portátil'},
//                    {id: 4, nombre: 'Tablet DROID 10.1"', importe: 165000, categoria:'Tablet'},
//                    {id: 5, nombre: 'Smartwatch 1.8" black', importe: 22500, categoria: 'Relojes'},
//                    {id: 6, nombre: 'Smartwatch 2" red', importe: 24200, categoria: 'Relojes'}];

// const nuevosProductos = [{id: 7, nombre: 'Tablet DROID 7"', importe: 110500, categoria: 'Tablet'},
//                          {id: 8, nombre: 'Smartwatch 1.5" white', importe: 22500, categoria: 'Relojes'}]

// productos.push(nuevosProductos)

// console.table(productos)


// console.clear()

// productos.forEach(producto => {
//     console.log(producto.importe = producto.importe * 1.21);
// })

// productos.forEach(producto => {
//     console.table(producto);
// })

// const parametro = 'taBLeT'
// const resultado = productos.find(producto => {
//         return producto.categoria.toLowerCase() === parametro.toLowerCase()
//             && producto.nombre.includes("DROID")
// })
      
//       if (resultado !== 'undefined') {
//           console.table(resultado)
//       }

// const parametro = 'PORtáTIl'
// const resultado = productos.filter(producto => {
//       return producto.categoria.toLowerCase().includes(parametro.toLowerCase())
// })
      
//       if (resultado.length > 0) {
//           console.table(resultado)
//       }

// const existe = productos.some(producto => producto.nombre === 'Notebook Gamer 17 pulgadas')

//       console.log("¿Existe el producto?:", existe)

// const existe = productos.some(producto => producto.nombre === "Macbook Pro 13'")

//       console.log("¿Existe el producto?:", existe)

// const productosReducidos = productos.map(producto => {
//   return { 
//           nombre: producto.nombre,
//           importe: producto.importe 
//          }
// })
// //ARRAY ORIGINAL
// console.table(productos)

// const productosReducidos = productos.map(producto => {
//     return { 
//             nombre: producto.nombre,
//             importe: producto.importe,
//             importe10up: (producto.importe * 1.15).toFixed(2),
//             importe10off: (producto.importe * 0.90).toFixed(2)
//            }
//   })

// //ARRAY TRANSFORMADO
// console.table(productosReducidos)

// const carrito = [{id: 1, nombre: 'Notebook 14" FHD', precioUnitario: 115000, cantidad: 1},
//                  {id: 4, nombre: 'Tablet DROID 10.1"', precioUnitario: 165000, cantidad: 1},
//                  {id: 5, nombre: 'Smartwatch 1.8" black', precioUnitario: 22500, cantidad: 2}]

// const saldoAfavor = 0

// const precioTotal = carrito.reduce((acumulado, producto)=> 
//                                     acumulado + (producto.precioUnitario * producto.cantidad), saldoAfavor)
  
//   console.log("Total del carrito = " + precioTotal.toFixed(2))

const productos = [
  {id: 1, nombre: 'Notebook 14" FHD', importe: 115000, categoria: 'Portátil'},
  {id: 2, nombre: 'Tablet PAD 9.7"', importe: 195000, categoria: 'Tablet'},
  {id: 3, nombre: 'Macbook Air 13', importe: 745000, categoria: 'Portátil'},
  {id: 4, nombre: 'Tablet DROID 10.1"', importe: 165000, categoria:'Tablet'},
  {id: 5, nombre: 'Smartwatch 1.8" black', importe: 22500, categoria: 'Relojes'},
  {id: 6, nombre: 'Smartwatch 2" red', importe: 24200, categoria: 'Relojes'}
];

console.log(JSON.stringify(productos));

// const nuevosProductos = [
//   {id: 7, nombre: 'Tablet DROID 7"', importe: 110500, categoria: 'Tablet'},
//   {id: 8, nombre: 'Smartwatch 1.5" white', importe: 22500, categoria: 'Relojes'}
// ];

// const productosAplanados = [productos, nuevosProductos].flat();

// console.table(productosAplanados);

// productos.length = 0
// productos = [productosAplanados].flat()

// console.table(productos);