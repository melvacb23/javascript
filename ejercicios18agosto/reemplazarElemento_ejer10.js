function reemplazarElemento(arreglo, valorAntiguo, valorNuevo) {
    for (let i = 0; i < arreglo.length; i++) {
        if (arreglo[i] === valorAntiguo) {
            arreglo[i] = valorNuevo;
        }
    }
    return arreglo;
}

console.log(reemplazarElemento([1, 2, 3, 2, 4], 2, 99));