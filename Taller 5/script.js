function validarFormulario() {
    // Validación de contraseñas
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
    if (password != confirmPassword) {
        alert("Las contraseñas no coinciden.");
        return false;
    }

    // Validación de usuario
    var usuario = document.getElementById("usuario").value;
    var confirmUsuario = document.getElementById("confirmUsuario").value;
    if (usuario != confirmUsuario) {
        alert("Los usuarios no coinciden.");
        return false;
    }

    // Mensaje de registro exitoso
    var mensaje = "Te has registrado exitosamente.\n\n";
    mensaje += "Nombre: " + document.getElementById("nombre").value + "\n";
    mensaje += "Apellido: " + document.getElementById("apellido").value + "\n";
    mensaje += "Fecha de Nacimiento: " + document.getElementById("fechaNacimiento").value + "\n";
    mensaje += "Correo: " + document.getElementById("correo").value + "\n";
    mensaje += "Usuario: " + document.getElementById("usuario").value + "\n";
    mensaje += "Enfermedades Contagiosas: " + document.getElementById("enfermedadesContagiosas").value + "\n";
    
    alert(mensaje);
    return true;
}

function mostrarEnfermedades() {
    var enfermedadesSelect = document.getElementById("enfermedades");
    var enfermedadesDiv = document.getElementById("enfermedadesDiv");
    if (enfermedadesSelect.value === "si") {
        enfermedadesDiv.style.display = "block";
    } else {
        enfermedadesDiv.style.display = "none";
    }
}
