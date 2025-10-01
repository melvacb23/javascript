function diasParaNavidad() {
  const hoy = new Date();
  const navidad = new Date(hoy.getFullYear(), 11, 25); // Mes 11 = diciembre

  // Si ya pasó Navidad este año, calcular para el próximo año
  if (hoy > navidad) {
    navidad.setFullYear(hoy.getFullYear() + 1);
  }

  const diff = navidad - hoy;
  const dias = Math.ceil(diff / (1000 * 60 * 60 * 24));

  return dias;
}

// Mostrar en la página
document.getElementById("contador").textContent = `Faltan ${diasParaNavidad()} días para Navidad `;