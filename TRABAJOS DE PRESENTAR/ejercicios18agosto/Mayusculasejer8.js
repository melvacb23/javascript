function aMayusculas(nombres) {
    let resultado = [];

    for (let i = 0; i < nombres.length; i++) {
        resultado[i] = nombres[i].toUpperCase();
    }

    return resultado;
}

console.log(aMayusculas(["ana", "pedro", "juan"]));