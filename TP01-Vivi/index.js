let miNombre ="Nico";
console.log(miNombre)

let nombreDos="Vivi";
console.log(nombreDos)

function mostrarFormulario(){
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let mail = document.getElementById("mail").value;
    let telefono = document.getElementById("telefono").value;
    console.log('Datos del formulario:'+ nombre , apellido , mail , telefono)
}