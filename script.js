let color = false;

document.getElementById("botoncolor").addEventListener("click", CambioColor);

function CambioColor() {
    if (color) {
        document.body.style.backgroundColor = "blue";
    } else {
        document.body.style.backgroundColor = "red";
    }
    color = !color;
}