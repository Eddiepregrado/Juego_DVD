
let colores = ["blue", "red", "green", "yellow", "purple", "orange"];
let indiceColor = 0;

document.getElementById("botoncolor").addEventListener("click", CambioColor);


function CambioColor() {
    document.body.style.backgroundColor = colores[indiceColor];
    indiceColor = (indiceColor + 1) % colores.length;
}
