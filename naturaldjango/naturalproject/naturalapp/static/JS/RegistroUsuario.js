function enviarDatosAlServidor(datos) {
    fetch('./API/apiInicioRegis.js', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(datos),
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Error al enviar los datos al servidor');
      }
      return response.json();
    })
    .then(data => {
      console.log(data);
    })
    .catch(error => {
      console.log('Error al enviar los datos al servidor: ', error);
    });
  }
  
document.getElementById('formReg').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const email = document.getElementById('email').value;  
    const password = document.getElementById('password').value;  
  
    const datosFormulario = {
      email: email,
      password: password
    };
  
    enviarDatosAlServidor(datosFormulario);
});
