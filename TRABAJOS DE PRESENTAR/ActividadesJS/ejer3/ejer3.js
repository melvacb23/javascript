let tareaArrastrada = null;

// Guardar la tarea que se arrastra
document.querySelectorAll(".tarea").forEach(tarea => {
  tarea.addEventListener("dragstart", e => {
    tareaArrastrada = tarea;
    setTimeout(() => tarea.style.display = "none", 0);
  });

  tarea.addEventListener("dragend", e => {
    tarea.style.display = "block";
    tareaArrastrada = null;
  });
});

// Permitir soltar en las columnas
document.querySelectorAll(".columna").forEach(columna => {
  columna.addEventListener("dragover", e => e.preventDefault());

  columna.addEventListener("drop", e => {
    columna.appendChild(tareaArrastrada);
    console.log(`Moviste ${tareaArrastrada.textContent} a ${columna.querySelector("h3").textContent}`);
  });
});