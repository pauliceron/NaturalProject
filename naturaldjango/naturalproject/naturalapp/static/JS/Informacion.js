document.addEventListener('DOMContentLoaded', function() {
  const formContainer = document.getElementById('formContainer');
  const form = document.getElementById('form'); 

  // Cargar el contenido del formulario desde el archivo externo
  fetch('../Formulario.html')
    .then(response => response.text())
    .then(data => {
      // Insertar el contenido del formulario en el contenedor de la página principal
      formContainer.innerHTML = data;

      // Agregar un evento de escucha para el envío del formulario
      form.addEventListener('submit', function(event) {
        event.preventDefault(); // Evitar que el formulario se envíe por defecto

        // Capturar los valores del formulario del archivo externo
        const tipoTurismo = form.querySelector('input[name="turismo"]:checked').value;
        const nombreEstablecimiento = form.querySelector('#nombre-establecimiento').value;
        const nombreEncargado = form.querySelector('#nombre-encargado').value;
        const ubicacion = form.querySelector('#ubicacion').value;
        const numeroContacto = form.querySelector('#numero-contacto').value;
        const imagenesLugar = form.querySelector('#imagenes-lugar').files;

        // Ahora puedes usar la información recopilada como lo desees
        console.log('Tipo de turismo:', tipoTurismo);
        console.log('Nombre del establecimiento:', nombreEstablecimiento);
        console.log('Nombre del encargado:', nombreEncargado);
        console.log('Ubicación:', ubicacion);
        console.log('Número de contacto:', numeroContacto);
        console.log('Imágenes del lugar:', imagenesLugar);
      });
    });
});