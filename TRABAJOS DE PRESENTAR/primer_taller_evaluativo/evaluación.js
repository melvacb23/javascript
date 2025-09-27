// Lista de estudiantes con sus nombres y puntajes simulados
const estudiantes = [
  { nombre: "Ana López", puntaje: 75 },
  { nombre: "Bruno Martínez", puntaje: 92 },
  { nombre: "Carla Gómez", puntaje: 45 },
  { nombre: "Diego Fernández", puntaje: 70 },
  { nombre: "Elena Ruiz", puntaje: 88 },
  { nombre: "Felipe Castro", puntaje: 50 },
  { nombre: "Gabriela Pérez", puntaje: 78 },
  { nombre: "Hugo Sánchez", puntaje: 73 },
  { nombre: "Isabela Morales", puntaje: 95 },
  { nombre: "Juan Ortiz", puntaje: 90 },
  { nombre: "Karla Vargas", puntaje: 55 },
  { nombre: "Luis Ramírez", puntaje: 80 },
  { nombre: "María Torres", puntaje: 60 }
];

// Clasificación de estudiantes en tres categorías según puntajes
const clasificacion = {
  principiante: estudiantes.filter(e => e.puntaje < 65).map(e => e.nombre),
  intermedio: estudiantes.filter(e => e.puntaje >= 65 && e.puntaje < 85).map(e => e.nombre),
  avanzado: estudiantes.filter(e => e.puntaje >= 85).map(e => e.nombre)
};

// Mostrar la clasificación
console.log("Principiantes:", clasificacion.principiante);
console.log("Intermedios:", clasificacion.intermedio);
console.log("Avanzados:", clasificacion.avanzado);