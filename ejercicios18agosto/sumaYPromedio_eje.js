function suma_Promedio(arreglo) {
    let suma = 0;

    for (let i = 0; i < arreglo.length; i++) {
        suma += arreglo[i];
    }

    let promedio = suma / arreglo.length;
    return { suma, promedio };
}

console.log(suma_Promedio([6, 12, 18, 24, 30]));
