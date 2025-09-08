function obtenerCapital(pais) {
    let paises = new Map();
    paises.set("Colombia", "Bogotá");
    paises.set("Ecuador", "Quito");
    paises.set("Perú", "Lima");
    paises.set("Chile", "Santiago");
    paises.set("Argentina", "Buenos Aires");
    paises.set("Brasil", "Brasilia");
    paises.set("México", "Ciudad de México");
    paises.set("España", "Madrid");
    paises.set("Francia", "París");
    paises.set("Alemania", "Berlín");

    return paises.get(pais) || "No tengo esa capital registrada";
}

console.log(obtenerCapital("Colombia"));
console.log(obtenerCapital("Francia"));