const enlace = document.getElementById('videoLink');
const recurso = document.getElementById('videoName');


function borrarEnlace() {
    enlace.value="";
}

function borrarArchivo() {
    recurso.value="";
}


recurso.addEventListener("change", borrarEnlace);

enlace.addEventListener("change", borrarArchivo);

