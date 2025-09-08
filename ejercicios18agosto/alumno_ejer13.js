let alumno = {
    nombre: "Pedro",
    notas: [3.5, 4.0, 5.0, 2.8, 4.5],
    promedio: function() {
        let suma = 0;
        for (let i = 0; i < this.notas.length; i++) {
            suma += this.notas[i];
        }
        return suma / this.notas.length;
    }
};

console.log("Alumno:", alumno.nombre);
console.log("Notas:", alumno.notas);
console.log("Promedio:", alumno.promedio());