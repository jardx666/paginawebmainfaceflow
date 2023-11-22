document.addEventListener("DOMContentLoaded", function() {
    // Espera a que el contenido del DOM esté completamente cargado
  
    // Obtén todas las etiquetas <a> dentro de elementos con la clase "nav-link"
    var menuItems = document.querySelectorAll(".nav-link");
  
    // Agrega un controlador de clic a cada elemento del menú
    menuItems.forEach(function(item) {
      item.addEventListener("click", function(event) {
        // Evita que el enlace siga el enlace predeterminado
        event.preventDefault();
  
        // Obtiene el texto del elemento de menú clicado
        var menuItemText = item.innerText;
  
        // Ejemplo: Realiza acciones según el elemento de menú clicado
        switch (menuItemText) {
          case "Registro":
            $('#modalRegistro').modal('show');
            // Llamada para mostrar u ocultar la caja de texto al abrir el modal
            mostrarOcultarCajaTexto();
            break;
          case "Acerca de":
            // Redirige a la página acerca-de.html
            
            break;
          // Agrega más casos según las opciones de tu menú
          // ...
          default:
            console.log("Opción de menú no reconocida: " + menuItemText);
        }
      });
    });
  
    // Agrega un controlador de cambio a las opciones de radio
    var opcionesRadio = document.getElementsByName("ocupacion");
    opcionesRadio.forEach(function(opcion) {
      opcion.addEventListener("change", function() {
        // Muestra o oculta la caja de texto según la opción seleccionada
        mostrarOcultarCajaTexto();
      });
    });
  });
  
  // Función para mostrar u ocultar la caja de texto según la opción seleccionada
  function mostrarOcultarCajaTexto() {
    var opcionSeleccionada = obtenerOpcionSeleccionada();
    var cajaTexto = document.getElementById("cajaCodigoEstudiante");
    var cajaTextocarrera = document.getElementById("cajaCarreraEstudiante");
    var cajaInvitado1 = document.getElementById("cajaInvitadosInicio");
    var cajaInvitado2 = document.getElementById("cajaInvitadosFin");
  
    // Si la opción seleccionada es "estudiante", muestra la caja de texto; de lo contrario, la oculta
    if (opcionSeleccionada === "estudiante") {
      cajaTexto.style.display = "block";
      cajaTextocarrera.style.display = "block";
    } else {
      cajaTexto.style.display = "none";
      cajaTextocarrera.style.display = "none";
    }

    if(opcionSeleccionada==="invitado"){
        cajaInvitado1.style.display = "block";
        cajaInvitado2.style.display = "block";
    }else{
        cajaInvitado1.style.display = "none";
        cajaInvitado2.style.display = "none";
    }
  }
  
  // Función para obtener la opción seleccionada
  function obtenerOpcionSeleccionada() {
    var opciones = document.getElementsByName("ocupacion");
    for (var i = 0; i < opciones.length; i++) {
      if (opciones[i].checked) {
        return opciones[i].value;
      }
    }
    return null;
  }
