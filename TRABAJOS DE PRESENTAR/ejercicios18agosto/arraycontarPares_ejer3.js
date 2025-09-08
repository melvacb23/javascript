function contarPares(arreglo) {
    let contador = 0;

    for (let i = 0; i < arreglo.length; i++) {
        if (arreglo[i] % 2 === 0) {
            contador++;
        }
    }

    return contador;
}

console.log("Cantidad de pares:", contarPares([1, 2, 3, 4, 5, 6]));