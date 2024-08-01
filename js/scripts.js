// querySelector

const heading = document.querySelector(".header__texto h2"); // Return 0 or 1 elements
heading.textContent = "Nuevo Heading";
/* console.log(heading); */

// querySelectorAll

const enlaces = document.querySelectorAll(".navegacion a");
/* console.log(enlaces[0]); */
enlaces[0].textContent = "Nuevo Texto para Enlace";
enlaces[0].classList.add("nueva-clase");
/* enlaces[0].classList.remove('navegacion__enlace'); */

// getElementById - Not used in modern JS

const heading2 = document.getElementById("heading");
/* console.log(heading2); */

// Create a new link
const nuevoEnlace = document.createElement("A");

// Add href
nuevoEnlace.href = "nuevo-enlace.html";

// Add text
nuevoEnlace.textContent = "Nuevo Enlace";

// Add class
nuevoEnlace.classList.add("navegacion__enlace");

// Add to HTML
const navegacion = document.querySelector(".navegacion");
navegacion.appendChild(nuevoEnlace);

console.log(nuevoEnlace);

// Events
/* 
console.log(1);

window.addEventListener("load", function () {
  // Load waits for JS and files to be loaded before executing
  console.log(2);
});

window.onload = function () {
  console.log(3);
};

document.addEventListener("DOMContentLoaded", function () {
  console.log(4);
});

console.log(5);
 */

// Select elements and associate events
/* 
const btnEnviar = document.querySelector(".boton--primario");
btnEnviar.addEventListener("click", function (event) {
  console.log(event);
  event.preventDefault();

  // Validate a form
  console.log("Enviando formulario");
});
 */

// Event Listeners for inputs and textarea
const datos = {
  nombre: "",
  email: "",
  mensaje: "",
};

const nombre = document.querySelector("#nombre");
const email = document.querySelector("#email");
const mensaje = document.querySelector("#mensaje");
const formulario = document.querySelector(".formulario");

nombre.addEventListener("input", leerTexto);
email.addEventListener("input", leerTexto);
mensaje.addEventListener("input", leerTexto);

// Submit event
formulario.addEventListener("submit", function (event) {
  event.preventDefault();

  // Form validation (Desctructuring)
  const { nombre, email, mensaje } = datos;

  console.log(nombre);
  console.log(email);
  console.log(mensaje);

  if (nombre === "" || email === "" || mensaje === "") {
    mostrarMensaje("Todos los campos son obligatorios", true);
    return;
  }

  // Create alert if validation is successful

  mostrarMensaje("Formulario enviado correctamente");

  // Form submission

  console.log("Formulario enviado");
});

function leerTexto(e) {
  /* console.log(e.target.value); */

  datos[e.target.id] = e.target.value;

  /* console.log(datos); */
}

// Refactor message
function mostrarMensaje(mensaje, error = null) {
  const alerta = document.createElement("P");
  alerta.textContent = mensaje;

  if (error) {
    alerta.classList.add("error");
  } else {
    alerta.classList.add("correcto");
  }

  formulario.appendChild(alerta);

  setTimeout(() => {
    alerta.remove();
  }, 5000);
}



// Show message when form is submitted
/* 
function mostrarMensaje(mensaje) {
  const alerta = document.createElement("P");
  alerta.textContent = mensaje;
  alerta.classList.add("correcto");

  formulario.appendChild(alerta);

  setTimeout(() => {
    alerta.remove();
  }, 5000);
}
 */
// Show error message
/* 
function mostrarError(mensaje) {
  const error = document.createElement("P");
  error.textContent = mensaje;
  error.classList.add("error");

  formulario.appendChild(error);

  setTimeout(() => {
    error.remove();
  }, 5000);
}
 */