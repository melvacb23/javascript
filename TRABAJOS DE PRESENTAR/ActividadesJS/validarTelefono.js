function validarTelefono(telefono) {
  const regex = /^\d{10}$/; // exactamente 10 números
  return regex.test(telefono);
}

// Pruebas
console.log(validarTelefono("3101234567")); // true
console.log(validarTelefono("12345"));      // false