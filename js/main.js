let nombrePersona = document.getElementById("nombrePersona");
let btnMostrar= document.getElementById("btnMostrar");


    btnMostrar.addEventListener("click", function(event){
        event.preventDefault();
    
        let nombre = nombrePersona.value.trim();
    
        if (nombre) {
            localStorage.setItem("nombrePersona", nombre);
            alert("Nombre guardado correctamente: " + nombre);
        } else {
            alert("Por favor, ingresa un nombre.");
        }
    });