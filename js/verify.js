const form = document.getElementById("fDatos")

form.addEventListener('submit', event => {
  checkSubmission()
  if (!form.checkValidity()) {
    event.preventDefault()
    event.stopPropagation()
  }

  form.classList.add('was-validated')
}, false)

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
  const n = document.getElementById("fNombre")
  const a = document.getElementById("fApellido")
  const tel = document.getElementById("fTel")
  const f = document.getElementById("fFecha")
  const e = document.getElementById("fMail")

  if(vacio(n.value)) {
    n.classList.add("is-invalid")
  } else {    
    n.classList.remove("is-invalid")
  }
  if(vacio(a.value)) {
    a.classList.add("is-invalid")
  } else {    
    a.classList.remove("is-invalid")
  }

  const telInvalid = document.getElementById("invalid-tel")
  const emailInvalid = document.getElementById("invalid-correo")
  if(vacio(tel.value) && vacio(e.value)) {
    const medioVacioMensaje = "Por favor, ingrese un medio de contacto"
    tel.setCustomValidity(medioVacioMensaje)
    e.setCustomValidity(medioVacioMensaje)
    telInvalid.innerHTML = medioVacioMensaje
    emailInvalid.innerHTML = medioVacioMensaje
  } else {
    if(!vacio(tel.value) && !verificar(tel.value, /^(?:([+]\d{1,4})[-.\s]?)?(?:[(](\d{1,3})[)][-.\s]?)?(\d{1,4})[-.\s]?(\d{1,4})[-.\s]?(\d{1,9})$/)) {
      tel.classList.add("is-invalid")
      telInvalid.innerHTML = "El teléfono ingresado no es válido"
    } else {    
      tel.setCustomValidity("")
      tel.classList.remove("is-invalid")
    }
  
    if(!vacio(e.value) && !verificar(e.value, ".+@.+\..+")) {
      e.classList.add("is-invalid")
      emailInvalid.innerHTML = "El email ingresado no es válido"
    } else {    
      e.setCustomValidity("")
      e.classList.remove("is-invalid")
    }
  }

  const dateInvalid = document.getElementById("invalid-fecha")
  if(vacio(f.value)) {
    f.classList.add("is-invalid")
    dateInvalid.innerHTML = "Por favor, ingrese una fecha de nacimiento"
  } else {    
    if(!verificarFecha(f.value)) {
      const fechaInvMensaje = "La fecha de nacimiento ingresada no es válida"
      f.setCustomValidity(fechaInvMensaje)
      dateInvalid.innerHTML = fechaInvMensaje
    }else {
      f.setCustomValidity("")
      f.classList.remove("is-invalid")
    }
  }

  form.classList.add("was-validated")
}