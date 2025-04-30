function mostrarResultados() {
document.getElementById("searchResults").style.display = "block";
}

function mostrarResultados() {
document.getElementById("searchResults").style.display = "block";
}

document.addEventListener("click", function(event) {
let searchContainer = document.querySelector(".search-container");
if (!searchContainer.contains(event.target)) {
    document.getElementById("searchResults").style.display = "none";
}
});


// APARICION OOPS

document.addEventListener("DOMContentLoaded", function() {
    const voluntariatBox = document.querySelector('.voluntariat_proper');
    const activadores = document.querySelectorAll('.givit, .botonesmenu_inac');
  
    activadores.forEach(elem => {
      elem.addEventListener('click', () => {
        voluntariatBox.classList.add('mostrar');
      });
    });
  });


  
  const botones = document.querySelectorAll('.botonesmenu');

// Recorre cada botón y le agrega un evento de clic
function closeVoluntariat(id) {
  document.getElementById(id).style.display = 'none';
}

function mostrarVoluntariat(showId, hideId) {
  document.getElementById(hideId).style.display = 'none';  // Ocultar el primero
  document.getElementById(showId).style.display = 'block'; // Mostrar el segundo
}



function mostrarVoluntariat(idMostrar, idOcultar) {
  var mostrarElemento = document.getElementById(idMostrar);
  var ocultarElemento = document.getElementById(idOcultar);

  // Mostrar el elemento con idMostrar y aplicar la animación
  mostrarElemento.style.display = 'block';
  mostrarElemento.classList.add('active');
  
  // Ocultar el elemento con idOcultar y quitar la clase active
  ocultarElemento.classList.remove('active');
  ocultarElemento.style.display = 'none';
}