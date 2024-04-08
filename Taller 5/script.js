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
    var usuarioPattern = /^[a-zA-Z0-9_]+$/; // Acepta letras (mayúsculas y minúsculas), números y guiones bajos
    if (!usuario.match(usuarioPattern)) {
        alert("El usuario solo puede contener letras (mayúsculas y minúsculas), números y guiones bajos.");
        return false;
    }
    if (usuario != confirmUsuario) {
        alert("Los usuarios no coinciden.");
        return false;
    }

    // Mensaje de registro exitoso
    var mensaje = "Te has registrado exitosamente.\n\n";
    mensaje += "Nombre: " + document.getElementById("nombre").value + "\n";
    mensaje += "Apellido: " + document.getElementById("apellido").value + "\n";
    mensaje += "Fecha de Nacimiento: " + document.getElementById("fechaNacimiento").value + "\n";
    mensaje += "Edad: " + calcularEdad() + "\n";
    mensaje += "Correo: " + document.getElementById("correo").value + "\n";
    mensaje += "Usuario: " + document.getElementById("usuario").value + "\n";
    mensaje += "Enfermedades Contagiosas: " + document.getElementById("enfermedadesContagiosas").value + "\n";

    var enfermedades = document.getElementById("enfermedades").value;
    if (enfermedades === "si") {
        // Si el usuario seleccionó "Sí", añadir la opción seleccionada en enfermedades contagiosas
        mensaje += "Enfermedades Contagiosas: " + document.getElementById("enfermedadesContagiosas").value + "\n";
    } else {
        // Si el usuario seleccionó "No", mostrar un mensaje específico
        mensaje += "Enfermedades Contagiosas: El usuario no tiene enfermedades contagiosas.\n";
    }
    
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

function calcularEdad() {
        var fechaNacimiento = new Date(document.getElementById("fechaNacimiento").value);
        var hoy = new Date();
        var edad = hoy.getFullYear() - fechaNacimiento.getFullYear();
        var mes = hoy.getMonth() - fechaNacimiento.getMonth();
        if (mes < 0 || (mes === 0 && hoy.getDate() < fechaNacimiento.getDate())) {
            edad--;
        }
        document.getElementById("edad").innerText = edad;
        return edad;
    }