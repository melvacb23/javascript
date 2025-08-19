function eliminarDuplicados(arreglo) {
    let resultado = [];

    for (let i = 0; i < arreglo.length; i++) {
        let existe = false;
        for (let j = 0; j < resultado.length; j++) {
            if (arreglo[i] === resultado[j]) {
                existe = true;
                break;
            }
        }
        if (!existe) {
            resultado[resultado.length] = arreglo[i];
        }
    }

    return resultado;
}

console.log(eliminarDuplicados([1, 2, 2, 3, 4, 4, 5]));