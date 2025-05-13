document.getElementById("botoncolor").addEventListener("click", CambioColor);

let color;
function CambioColor(){
    if(color){
        
        document.body.style.backgroundColor = "blue";
    }
    else{
        color = true;
        document.body.style.backgroundColor = "red";
    }
}