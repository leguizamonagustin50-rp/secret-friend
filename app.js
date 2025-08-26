// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let agregarAmigo = [];

function agregarAmigo() {
  let nombre = prompt("Ingrese el nombre del amigo:");
  let edad = parseInt(prompt("Ingrese la edad del amigo:"));

  if (edad < 18) {
    alert("No se pueden agregar amigos menores de edad.");
  } else {
    agregarAmigo.push({ nombre: nombre, edad: edad });
    alert("Amigo agregado exitosamente.");
  }
}

