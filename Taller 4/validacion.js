//  Script.js 
const rangevalue =  
    document.querySelector(".slider-container .price-slider"); 
const rangeInputvalue =  
    document.querySelectorAll(".range-input input"); 
  
// Set the price gap 
let priceGap = 500; 
  
// Adding event listners to price input elements 
const priceInputvalue =  
    document.querySelectorAll(".price-input input"); 
for (let i = 0; i < priceInputvalue.length; i++) { 
    priceInputvalue[i].addEventListener("input", e => { 
  
        // Parse min and max values of the range input 
        let minp = parseInt(priceInputvalue[0].value); 
        let maxp = parseInt(priceInputvalue[1].value); 
        let diff = maxp - minp 
  
        if (minp < 0) { 
            alert("minimum price cannot be less than 0"); 
            priceInputvalue[0].value = 0; 
            minp = 0; 
        } 
  
        // Validate the input values 
        if (maxp > 10000) { 
            alert("maximum price cannot be greater than 10000"); 
            priceInputvalue[1].value = 10000; 
            maxp = 10000; 
        } 
  
        if (minp > maxp - priceGap) { 
            priceInputvalue[0].value = maxp - priceGap; 
            minp = maxp - priceGap; 
  
            if (minp < 0) { 
                priceInputvalue[0].value = 0; 
                minp = 0; 
            } 
        } 
  
        // Check if the price gap is met  
        // and max price is within the range 
        if (diff >= priceGap && maxp <= rangeInputvalue[1].max) { 
            if (e.target.className === "min-input") { 
                rangeInputvalue[0].value = minp; 
                let value1 = rangeInputvalue[0].max; 
                rangevalue.style.left = `${(minp / value1) * 100}%`; 
            } 
            else { 
                rangeInputvalue[1].value = maxp; 
                let value2 = rangeInputvalue[1].max; 
                rangevalue.style.right =  
                    `${100 - (maxp / value2) * 100}%`; 
            } 
        } 
    }); 
  
    // Add event listeners to range input elements 
    for (let i = 0; i < rangeInputvalue.length; i++) { 
        rangeInputvalue[i].addEventListener("input", e => { 
            let minVal =  
                parseInt(rangeInputvalue[0].value); 
            let maxVal =  
                parseInt(rangeInputvalue[1].value); 
  
            let diff = maxVal - minVal 
              
            // Check if the price gap is exceeded 
            if (diff < priceGap) { 
              
                // Check if the input is the min range input 
                if (e.target.className === "min-range") { 
                    rangeInputvalue[0].value = maxVal - priceGap; 
                } 
                else { 
                    rangeInputvalue[1].value = minVal + priceGap; 
                } 
            } 
            else { 
              
                // Update price inputs and range progress 
                priceInputvalue[0].value = minVal; 
                priceInputvalue[1].value = maxVal; 
                rangevalue.style.left = 
                    `${(minVal / rangeInputvalue[0].max) * 100}%`; 
                rangevalue.style.right = 
                    `${100 - (maxVal / rangeInputvalue[1].max) * 100}%`; 
            } 
        }); 
    } 
}
document.addEventListener('DOMContentLoaded', function () {
  const formulario = document.getElementById('formularioUsuario');
  formulario.addEventListener('submit', function (e) {
    e.preventDefault(); // Evita el envío del formulario automáticamente

    // Validaciones
    const esNombreValido = validarCampoLleno('nombre', 'errorNombre', 25);
    const esApellidoValido = validarCampoLleno('apellido', 'errorApellido', 25);
    const esDireccionValida = validarDireccion('direccion', 'errorDireccion');
    const esCCUsuarioValido = validarCCUsuario('ccusuario', 'errorCCUsuario', 10, 20);
    const esCCPasswdValido = validarCCPasswd('ccpasswd', 'errorCCPasswd');
    const esConfirmacionValida = validarConfirmacion('ccpasswd', 'confirmar_passwd', 'errorConfirmarPasswd');
    const esEmailValido = validarCampoLleno('email', 'errorEmail', 120);

    // Validación de gustos si la sección está activa
    const esSeccionGustosActiva = document.querySelector('input[name="gustos"]:checked').value === "si";
    let esGustosValidos = true;
    if (esSeccionGustosActiva) {
      esGustosValidos = validarGustos();
    }

    if (esNombreValido && esApellidoValido && esDireccionValida && esCCUsuarioValido && esCCPasswdValido && esConfirmacionValida && esEmailValido && esGustosValidos) {
      console.log("Formulario válido, enviado!");
      // Aquí puedes proceder con el envío del formulario o lo que necesites hacer
    }
  });
});

function validarCampoLleno(campoId, errorId, maxLongitud) {
  const valor = document.getElementById(campoId).value;
  const mensajeError = document.getElementById(errorId);
  if (!valor) {
    mensajeError.textContent = 'Este campo es obligatorio.';
    return false;
  } else if (valor.length > maxLongitud) {
    mensajeError.textContent = `El campo no puede tener más de ${maxLongitud} caracteres.`;
    return false;
  }
  mensajeError.textContent = '';
  return true;
}

function validarDireccion(campoId, errorId) {
  const valor = document.getElementById(campoId).value;
  const mensajeError = document.getElementById(errorId);
  const prefijosValidos = ['cll', 'cra', 'av', 'anv', 'trans'];
  const esValido = prefijosValidos.some(prefijo => valor.startsWith(prefijo));
  mensajeError.textContent = esValido ? '' : 'La dirección debe empezar con cll, cra, av, anv, o trans.';
  return esValido;
}

function validarCCUsuario(campoId, errorId, minLongitud, maxLongitud) {
  const valor = document.getElementById(campoId).value;
  const mensajeError = document.getElementById(errorId);
  if (valor.length < minLongitud || valor.length > maxLongitud) {
    mensajeError.textContent = `El campo debe tener entre ${minLongitud} y ${maxLongitud} caracteres.`;
    return false;
  }
  if (!/^[a-zA-Z0-9]+$/.test(valor)) {
    mensajeError.textContent = 'El campo no debe contener caracteres extraños.';
    return false;
  }
  mensajeError.textContent = '';
  return true;
}

function validarCCPasswd(campoId, errorId) {
  const valor = document.getElementById(campoId).value;
  const mensajeError = document.getElementById(errorId);
  if (valor.length < 15 || valor.length > 20) {
    mensajeError.textContent = 'La contraseña debe tener entre 15 y 20 caracteres.';
    return false;
  }
  if (!/[A-Z]/.test(valor) || !/[0-9]/.test(valor) || !/[#%\/&]/.test(valor)) {
    mensajeError.textContent = 'La contraseña debe contener mayúsculas, números y los caracteres especiales #, %, /, &.';
    return false;
  }
  mensajeError.textContent = '';
  return true;
}

function validarConfirmacion(campoPasswdId, campoConfirmacionId, errorId) {
  const passwd = document.getElementById(campoPasswdId).value;
  const confirmacion = document.getElementById(campoConfirmacionId).value;
  const mensajeError = document.getElementById(errorId);
  if (passwd !== confirmacion) {
    mensajeError.textContent = 'La confirmación de la contraseña no coincide.';
    return false;
  }
  mensajeError.textContent = '';
  return true;
}

// Mostrar u ocultar campos de gustos según la selección del usuario
const seccionGustos = document.getElementById('seccionGustos');
const camposGustos = document.getElementById('camposGustos');
seccionGustos.addEventListener('change', function () {
  if (document.querySelector('input[name="gustos"]:checked').value === "si") {
    camposGustos.style.display = "block";
  } else {
    camposGustos.style.display = "none";
  }
});

// Función para actualizar el valor debajo del slider
function updateSliderValue(input, output) {
  output.innerHTML = input.value; // Mostrar el valor actual del slider
}

// Obtener los elementos de los sliders y los outputs
const fromSlider = document.getElementById('fromSlider');
const toSlider = document.getElementById('toSlider');
const fromOutput = document.getElementById('fromOutput');
const toOutput = document.getElementById('toOutput');

// Función para actualizar el valor del slider y el output cuando se cambia manualmente
function updateSliderAndOutput(input, output) {
  input.value = output.value; // Actualizar el valor del slider
  updateSliderValue(input, output); // Actualizar el valor del output
}

fromOutput.addEventListener('input', function () {
  updateSliderAndOutput(fromSlider, fromOutput);
});

toOutput.addEventListener('input', function () {
  updateSliderAndOutput(toSlider, toOutput);
});

// Actualizar el valor debajo de los sliders cuando se muevan
fromSlider.addEventListener('input', function () {
  updateSliderValue(fromSlider, fromOutput);
});

toSlider.addEventListener('input', function () {
  updateSliderValue(toSlider, toOutput);
});

// Funciones de validación de gustos
function validarGustos() {
  const color = document.getElementById('color').value;
  const marca = document.getElementById('marca').value;
  const estilo = document.getElementById('estilo').value;
  const modelo = document.getElementById('modelo').value;

  const mensajeErrorColor = document.getElementById('errorColor');
  const mensajeErrorMarca = document.getElementById('errorMarca');
  const mensajeErrorEstilo = document.getElementById('errorEstilo');
  const mensajeErrorModelo = document.getElementById('errorModelo');

  let esValido = true;

  if (!color) {
    mensajeErrorColor.textContent = 'Este campo es obligatorio.';
    esValido = false;
  } else {
    mensajeErrorColor.textContent = '';
  }

  if (!marca) {
    mensajeErrorMarca.textContent = 'Este campo es obligatorio.';
    esValido = false;
  } else {
    mensajeErrorMarca.textContent = '';
  }

  if (!estilo) {
    mensajeErrorEstilo.textContent = 'Este campo es obligatorio.';
    esValido = false;
  } else {
    mensajeErrorEstilo.textContent = '';
  }

  if (!modelo) {
    mensajeErrorModelo.textContent = 'Este campo es obligatorio.';
    esValido = false;
  } else {
    mensajeErrorModelo.textContent = '';
  }

  return esValido;
}
