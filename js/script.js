
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