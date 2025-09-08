function contarPalabras(texto) {
    let contador = 0;
    let dentroDePalabra = false;

    for (let i = 0; i < texto.length; i++) {
        let caracter = texto[i];
        if (caracter !== " " && !dentroDePalabra) {
            dentroDePalabra = true;
            contador++;
        } else if (caracter === " ") {
            dentroDePalabra = false;
        }
    }

    return contador;
}

console.log("Cantidad de palabras:", contarPalabras("Hola este es un ejemplo"));