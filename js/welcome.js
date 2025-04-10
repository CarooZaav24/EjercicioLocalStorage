let encabezado1 = document.getElementById("encabezado1");
let nombre = localStorage.getItem("nombrePersona");
let btnEliminar = document.getElementById("btnEliminar")

if (nombre != null) {
    encabezado1.innerText = `Hola ${nombre}, bienvenido/a de nuevo.`;

    console.log(nombre);
} else {
    encabezado1.innerText = "Por favor ve al index e ingresa tu nombre.";
}

btnEliminar.addEventListener("click", function(event){
    localStorage.removeItem("nombrePersona");
});
