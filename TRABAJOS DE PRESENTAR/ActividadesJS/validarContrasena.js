function validarContrasena(contrasena) {
  const regex = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
  return regex.test(contrasena);
}

// Pruebas
console.log(validarContrasena("Abc12345")); // true
console.log(validarContrasena("abcd1234")); // false (no tiene mayúscula)
console.log(validarContrasena("ABCDabcd")); // false (no tiene número)