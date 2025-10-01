function validarURL(url) {
  const regex = /^(http|https):\/\/[a-zA-Z0-9.-]+\.[a-z]{2,}/;
  return regex.test(url);
}

// Pruebas
console.log(validarURL("https://www.google.com")); // true
console.log(validarURL("ftp://ejemplo.com"));      // false