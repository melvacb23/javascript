function generarPassword() {
    const mayusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const minusculas = "abcdefghijklmnopqrstuvwxyz";
    const digitos = "0123456789";
    const especiales = "@#$%&()=?¿*+[]{}";

    function obtenerCaracter(cadena) {
        let indice = Math.floor(Math.random() * cadena.length);
        return cadena[indice];
    }

    let password = "";
    for (let i = 0; i < 2; i++) {
        password += obtenerCaracter(mayusculas);
        password += obtenerCaracter(minusculas);
        password += obtenerCaracter(digitos);
        password += obtenerCaracter(especiales);
    }
    return password;
}

console.log("Contraseña generada:", generarPassword());