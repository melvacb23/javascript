const prompt = require('prompt-sync')();

let productos = new Map();
let historial = [];
let salir = false;

while (!salir) {
    let nombre = prompt("Ingrese nombre del producto (o 'fin' para salir): ");
    if (nombre.toLowerCase() === "fin") {
        salir = true;
    } else {
        let precio = parseFloat(prompt("Ingrese precio del producto: "));
        productos.set(nombre, precio);
        historial.push(nombre);
    }
}

let productosUnicos = new Set(historial);

console.log("Productos únicos:", productosUnicos);
console.log("Precios:", productos);
console.log("Historial:", historial);