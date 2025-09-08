import Libro from "./libro.js";

let libros = [];
let editIndex = -1;

const form = document.getElementById("formLibro");
const tablaLibros = document.getElementById("tablaLibros");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let titulo = document.getElementById("txtTitulo").value;
  let autor = document.getElementById("txtAutor").value;
  let editorial = document.getElementById("txtEditorial").value;
  let idioma = document.getElementById("cbIdioma").value;

  if (editIndex === -1) {
    libros.push(new Libro(titulo, autor, editorial, idioma));
  } else {
    libros[editIndex].titulo = titulo;
    libros[editIndex].autor = autor;
    libros[editIndex].editorial = editorial;
    libros[editIndex].idioma = idioma;
    editIndex = -1;
  }

  mostrarLibros();
  form.reset();
});

function mostrarLibros() {
  tablaLibros.innerHTML = "";
  libros.forEach((l, i) => {
    let fila = `
      <tr>
        <td>${l.titulo}</td>
        <td>${l.autor}</td>
        <td>${l.editorial}</td>
        <td>${l.idioma}</td>
        <td>
          <button class="btn btn-warning btn-sm" onclick="editarLibro(${i})">Editar</button>
          <button class="btn btn-danger btn-sm" onclick="eliminarLibro(${i})">Eliminar</button>
        </td>
      </tr>`;
    tablaLibros.innerHTML += fila;
  });
}

window.editarLibro = function (index) {
  document.getElementById("txtTitulo").value = libros[index].titulo;
  document.getElementById("txtAutor").value = libros[index].autor;
  document.getElementById("txtEditorial").value = libros[index].editorial;
  document.getElementById("cbIdioma").value = libros[index].idioma;
  editIndex = index;
};

window.eliminarLibro = function (index) {
  libros.splice(index, 1);
  mostrarLibros();
};