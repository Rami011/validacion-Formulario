
const submitFunction = (event) =>{
    if(!validarFormulario()){
        event.preventDefault();

    }else{
        event.preventDefault();

        alert(
            'Los datos enviados fueron: \n' +
            'Nombre: ' + document.getElementById('nombre').value + '\n'+
            'Apellido: ' + document.getElementById('nombre').value + '\n'+
            'Documento: ' + document.getElementById('nombre').value + '\n'+
            'Edad: ' + document.getElementById('nombre').value + '\n'+
            'Actividad: ' + document.getElementById('nombre').value + '\n'+
            'Nivel de Estudio: ' + document.getElementById('nombre').value + '\n'
        )

    }
}
document.getElementById('formulario').addEventListener('submit', submitFunction)

function validarFormulario(){
    const camposTexto = document.querySelectorAll('input[type=text]')
    let validacionCorrecta = true;

    camposTexto.forEach(campo => {
        let errorCampo = document.getElementById('error' + campo.id.charAt(0).toUpperCase() + campo.id.slice(1))
        if(campo.value.length == ''){
            mostrarError(errorCampo, 'Este Campo es Requerido')
            validacionCorrecta = false;
        }else if( campo.value.length > 0 && campo.value.length < 3){
            mostrarError(errorCampo,'Este campo debe tener al menos 3 caracteres')
            validacionCorrecta = false;
        }else{
            ocultarError()
        }
    })

    const email = document.getElementById('email');
    let errorEmail = document.getElementById('errorEamil');

    if(/^[^\s@]+@[^\s@]+$/.test(email.value)){ //Valida el formato del email
        ocultarError(errorEmail)
    }else{
        mostrarError(errorEmail, 'Ingrese un correo electronico valido')
    }

    //Validacion Edad

    const edad = document.getElementById('edad')
    let errorEdad = document.getElementById('errorEdad')

    if(edad.value < 18){
        mostrarError(errorEdad,'Debes ser mayor de 18 años para registrarte')
        validacionCorrecta = false;

    }else{
        ocultarError(errorEdad)
    }

    //Validacion Actividad

    const actividad = document.getElementById('actividad')
    let errorActividad = document.getElementById('errorActividad')

    if(actividad.value == ''){
        mostrarError(errorActividad, 'Debes Seleccionar una actividad')
        validacionCorrecta = false;
    }else{
        ocultarError(errorActividad)
    }


    //Validacion Nivel de Estudio


    const nivelEstudio = document.getElementById('nivelEstudio')
    let errorNivelEstudio = document.getElementById('errorNivelEstudio')

    if(nivelEstudio.value == ''){
        mostrarError(errorNivelEstudio, 'Debes seleccionar un nivel de estudio')
        validacionCorrecta = false;
    }else{
        mostrarError(errorNivelEstudio)
    }

    //validar los terminos y condiciones

    const aceptoTerminos = document.getElementById('aceptoTerminos')
    let errorAcecptoTerminos = document.getElementById('errorAceptoTerminos')

    if(!aceptoTerminos.checked){
        mostrarError(errorAcecptoTerminos,'Debes aceptar los terminos')
        validacionCorrecta = false;
    }else{
        ocultarError(errorAcecptoTerminos)
    }

    return validacionCorrecta
}




const mostrarError = (element, message) => {
    element.textContent = message;
    element.style.display = "block"
}

const ocultarError = (element) => {
    element.textContent = "";
    element.style.display = "none"
}

