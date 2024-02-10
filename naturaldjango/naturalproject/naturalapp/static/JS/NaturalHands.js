document.addEventListener('DOMContentLoaded', function() {
    var enlace = <link>document.getElementById('init')</link>;
  
    enlace.addEventListener('click', function(event) {
      event.preventDefault();
    });
  });

  // Agregar un controlador de eventos de clic al botón
document.getElementById("iniciarRecorrido").addEventListener("click", function() {
    
    // Redirigir a la otra página HTML
    window.location.href = "C:\Users\USUARIO\react\pag natural hands\HTML";
});