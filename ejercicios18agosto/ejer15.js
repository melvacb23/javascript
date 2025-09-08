const prompt = require('prompt-sync')();

let cuentas = [];
let consecutivo = 1;

function crearCuenta() {
    let fecha = new Date();
    let anio = fecha.getFullYear();
    let codigo = `${anio}-${consecutivo++}`;
    let cuenta = {
        codigo: codigo,
        fecha: fecha.toLocaleDateString(),
        saldo: 0
    };
    cuentas.push(cuenta);
    console.log("Cuenta creada:", cuenta);
}

function consignarCuenta() {
    let codigo = prompt("Ingrese código de cuenta: ");
    let monto = parseFloat(prompt("Ingrese valor a consignar: "));
    for (let i = 0; i < cuentas.length; i++) {
        if (cuentas[i].codigo === codigo) {
            cuentas[i].saldo += monto;
            console.log("Consignación exitosa. Nuevo saldo:", cuentas[i].saldo);
            return;
        }
    }
    console.log("Cuenta no encontrada.");
}

function retirarCuenta() {
    let codigo = prompt("Ingrese código de cuenta: ");
    let monto = parseFloat(prompt("Ingrese valor a retirar: "));
    for (let i = 0; i < cuentas.length; i++) {
        if (cuentas[i].codigo === codigo) {
            if (monto <= cuentas[i].saldo) {
                cuentas[i].saldo -= monto;
                console.log("Retiro exitoso. Nuevo saldo:", cuentas[i].saldo);
            } else {
                console.log("Fondos insuficientes.");
            }
            return;
        }
    }
    console.log("Cuenta no encontrada.");
}

function consultarCuenta() {
    let codigo = prompt("Ingrese código de cuenta: ");
    for (let i = 0; i < cuentas.length; i++) {
        if (cuentas[i].codigo === codigo) {
            console.log("Cuenta encontrada:", cuentas[i]);
            return;
        }
    }
    console.log("Cuenta no encontrada.");
}

function listarCuentas() {
    console.log("Listado de cuentas:");
    for (let i = 0; i < cuentas.length; i++) {
        console.log(cuentas[i]);
    }
}

// Menú principal
let opcion;
do {
    console.log("\nMENÚ BANCO ADSO");
    console.log("1. Crear Cuenta");
    console.log("2. Consignar Cuenta");
    console.log("3. Retirar Cuenta");
    console.log("4. Consultar Cuenta Por Código");
    console.log("5. Listar Cuentas");
    console.log("6. Salir");
    opcion = prompt("Ingrese Opción (1-6): ");

    switch (opcion) {
        case "1": crearCuenta(); break;
        case "2": consignarCuenta(); break;
        case "3": retirarCuenta(); break;
        case "4": consultarCuenta(); break;
        case "5": listarCuentas(); break;
        case "6": console.log("Saliendo..."); break;
        default: console.log("Opción inválida");
    }
} while (opcion !== "6");

