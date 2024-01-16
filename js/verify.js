const vacio = (campo) => {
  let estaVacio = true
  if(campo != "" && campo != null) {
    estaVacio = false
  }
  return estaVacio
}

const verificar = (texto, exp) => {
  if(texto.match(exp)) {
    return true
  } else {
   return false 
  }
}

const form = document.getElementById("fDatos")
const email = document.getElementById("fMail")
const tel = document.getElementById("fTel")
const fecha = document.getElementById("fFecha")

const emailInvalid = document.getElementById("invalid-correo")
const telInvalid = document.getElementById("invalid-tel")

const emailNoValidoMensaje = "El email ingresado no es válido"
const telefonoNoValidoMensaje = "El teléfono ingresado no es válido"
const medioVacioMensaje = "Por favor, ingrese un medio de contacto"

form.addEventListener('submit', event => {
  checkSubmission()
  if (!form.checkValidity()) {
    event.preventDefault()
    event.stopPropagation()
  }

  form.classList.add('was-validated')
}, false)

email.addEventListener('input', event => {
  if(vacio(email.value) && vacio(tel.value)) {
    email.setCustomValidity(medioVacioMensaje)
    emailInvalid.innerHTML = medioVacioMensaje

  } else if (email.validity.typeMismatch) {
    email.setCustomValidity(emailNoValidoMensaje)
    emailInvalid.innerHTML = emailNoValidoMensaje
  } else {
    email.setCustomValidity("")
  }
});

tel.addEventListener('input', event => {
  if(vacio(tel.value) && vacio(email.value)) {
    tel.setCustomValidity(medioVacioMensaje)
    telInvalid.innerHTML = medioVacioMensaje
  } else if (tel.validity.patternMismatch) {
    tel.setCustomValidity(
      telefonoNoValidoMensaje,
    );    
    telInvalid.innerHTML = telefonoNoValidoMensaje
  } else {
    tel.setCustomValidity("");
  }
});

const validarMedios = () => {
  if(vacio(tel.value) && vacio(email.value)) {
    tel.setCustomValidity(medioVacioMensaje)
    email.setCustomValidity(medioVacioMensaje)
    telInvalid.innerHTML = medioVacioMensaje
    emailInvalid.innerHTML = medioVacioMensaje
  } else {
    if(!vacio(tel.value) && tel.validity.patternMismatch) {
      tel.classList.add("is-invalid")
      telInvalid.innerHTML = telefonoNoValidoMensaje
    } else {    
      tel.setCustomValidity("")
      tel.classList.remove("is-invalid")
    }    
  
    if(!vacio(email.value) && email.validity.typeMismatch) {
      email.classList.add("is-invalid")
      emailInvalid.innerHTML = emailNoValidoMensaje
    } else {    
      email.setCustomValidity("")
      email.classList.remove("is-invalid")
    }
  }
}

const validarFecha = () => {
  const dateInvalid = document.getElementById("invalid-fecha")
  if(vacio(fecha.value)) {
    fecha.classList.add("is-invalid")
    dateInvalid.innerHTML = "Por favor, ingrese una fecha de nacimiento"
  } else {    
    if(!verificarFecha(fecha.value)) {
      const fechaInvMensaje = "La fecha de nacimiento ingresada no es válida"
      fecha.setCustomValidity(fechaInvMensaje)
      dateInvalid.innerHTML = fechaInvMensaje
    }else {
      fecha.setCustomValidity("")
      fecha.classList.remove("is-invalid")
    }
  }
}

const verificarFecha = (fecha) => {
  const mEdad = 18
    const hoy = new Date()
    const fechaValida = new Date(hoy.getFullYear() - mEdad, hoy.getMonth(), hoy.getDate(), 0, 0, 0)

    const fValor = new Date(fecha)
    fValor.setHours(fValor.getHours() + fValor.getTimezoneOffset()/60)
    if(fValor < fechaValida) {
      return true
    } else {
      return false
    }
}

const checkSubmission = () => {
  validarMedios()  
  validarFecha()
}