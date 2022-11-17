(function () {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }else{
          RegistrarUsuario();
          event.preventDefault()
        }

        form.classList.add('was-validated')
      }, false)
    })
})()

function RegistrarUsuario(){
  let cedula = document.querySelector("#txtCedula").value;
  let nombre = document.querySelector("#txtNombre").value;
  let apellido = document.querySelector("#txtApellido").value;
  let telefono = document.querySelector("#txtTelefono").value;
  let correo = document.querySelector("#txtCorreo").value;
  let rol = document.querySelector("#txtRol").value;

  let url = `http://localhost:3000/usuarios`;
  let datos = {
    cedula :cedula,
    nombre : nombre,
    apellido : apellido,
    telefono: telefono,
    correo:correo,
    rol : rol

  };
  fetch(url, {
    method: 'POST',
    body: JSON.stringify(datos),
    headers:{
      'Content-Type':'application/json'
    }
  }).then(res => res.json())
  .then(mensaje => {
    console.log(mensaje)
  })
}
