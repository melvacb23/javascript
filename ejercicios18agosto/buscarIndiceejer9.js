function buscarIndice(arreglo, valor) {
    for (let i = 0; i < arreglo.length; i++) {
        if (arreglo[i] === valor) {
            return i;
        }
    }
    return -1; 
}

console.log(buscarIndice([10, 20, 30, 40], 30)); 
console.log(buscarIndice([10, 20, 30, 40], 50)); 