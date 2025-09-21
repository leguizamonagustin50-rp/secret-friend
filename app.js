let escribaNombre = document.getElementById("amigo");
let listaAmigos = [];
let htmlListaAmigos = document.getElementById("listaAmigos");
let botonSortear = document.getElementById("resultado");

function agregarAmigo() {
listaAmigos.push(escribaNombre.value);
htmlListaAmigos.innerHTML += `<li>${escribaNombre.value}</li>`;
}

function sortearAmigo() {
    let numeroAleatorio = Math.floor(Math.random() * listaAmigos.length);
    let amigoSorteado = listaAmigos[numeroAleatorio];
    botonSortear.innerHTML = `El amigo secreto es: ${amigoSorteado}`;

}