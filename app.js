// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let sumarAmigo = [];

function agregarAmigo() {
  let amigo = prompt("Ingrese el nombre de su amigo:");
  if (amigo) {
    sumarAmigo.push(amigo);
    console.log(`Amigo ${amigo} agregado.`);
  } else {
    console.log("No se ingresó ningún nombre.");
  }
}

