const prompt = require('prompt-sync')();

let votos = { uno: 0, dos: 0, tres: 0, blanco: 0 };
let votantes = 0;
const MAX_VOTANTES = 50;
const CLAVE = "1234"; // clave para cierre manual

while (votantes < MAX_VOTANTES) {
    console.log("\nMENU ELECCIONES 2025");
    console.log("1. Candidato Uno");
    console.log("2. Candidato Dos");
    console.log("3. Candidato Tres");
    console.log("4. Voto en Blanco");
    console.log("5. Cerrar elecciones (solo jurado)");

    let opcion = prompt("Ingrese su voto: ");

    if (opcion === CLAVE) {
        console.log("Elecciones cerradas por el jurado.");
        break;
    }

    switch (opcion) {
        case "1": votos.uno++; break;
        case "2": votos.dos++; break;
        case "3": votos.tres++; break;
        case "4": votos.blanco++; break;
        case "5": 
            console.log("Clave incorrecta. Solo jurado puede cerrar."); 
            continue;
        default:
            console.log("Opción inválida.");
            continue;
    }
    votantes++;
    console.log(`Votante número ${votantes} registrado.`);
    if (votantes === MAX_VOTANTES) {
        console.log("Se alcanzó el máximo de votantes.");
    }
}

console.log("\n--- RESULTADOS ---");
console.log("Total votantes:", votantes);
console.log("Candidato Uno:", votos.uno);
console.log("Candidato Dos:", votos.dos);
console.log("Candidato Tres:", votos.tres);
console.log("Voto en Blanco:", votos.blanco);