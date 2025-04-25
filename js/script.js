
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



// ----- GEEVEET EN MAPA
const givitImgs = document.querySelectorAll('.givit');
const geeveetPopups = document.querySelectorAll('.geeveet_popup');

if (givitImgs.length > 0 && geeveetPopups.length > 0) {
    givitImgs.forEach(givit => {
        givit.addEventListener('click', () => {
            const id = givit.dataset.id;

            // Toggle del activo
            const yaActivo = givit.classList.contains('activa');
            givitImgs.forEach(g => g.classList.remove('activa'));
            geeveetPopups.forEach(p => p.classList.remove('visible'));

            if (!yaActivo) {
                givit.classList.add('activa');
                const popupToShow = document.querySelector(`.geeveet_popup[data-id="${id}"]`);
                if (popupToShow) popupToShow.classList.add('visible');
            }
        });
    });
}
