
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
botones.forEach(boton => {
  boton.addEventListener('click', () => {
    // Elimina la clase 'active' de todos los botones
    botones.forEach(b => b.classList.remove('active'));
    // Añade 'active' solo al botón que fue clicado
    boton.classList.add('active');
  });
});