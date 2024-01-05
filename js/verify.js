const vacio = (campo) => {
  let estaVacio = true
  if(campo != "" && campo != null) {
    estaVacio = false
  }
  return estaVacio
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
    tel.classList.add("is-invalid")
    e.classList.add("is-invalid")
    const medioVacioMensaje = "Por favor, ingrese un medio de contacto"
    telInvalid.innerHTML = medioVacioMensaje
    emailInvalid.innerHTML = medioVacioMensaje
  } else {
    tel.classList.remove("is-invalid")
    e.classList.remove("is-invalid")
  }

  const dateInvalid = document.getElementById("invalid-fecha")
  if(vacio(f.value)) {
    f.classList.add("is-invalid")
    dateInvalid.innerHTML = "Por favor, ingrese una fecha de nacimiento"
  } else {
    f.classList.remove("is-invalid")
  }

}