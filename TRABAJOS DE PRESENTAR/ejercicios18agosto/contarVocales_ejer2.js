function contarVocales(texto) {
    let contador = 0;
    let vocales = "aeiouáéíóúAEIOUÁÉÍÓÚ";

    for (let i = 0; i < texto.length; i++) {
        let letra = texto[i];
        if (vocales.indexOf(letra) !== -1) {
            contador++;
        }
    }
    return contador;
}

console.log("Cantidad de vocales:", contarVocales("Analisis y desarrollo de software"));