document.addEventListener('DOMContentLoaded', function() {
    const anuncio = document.getElementById('anuncio');
    const botonCerrar = document.getElementById('cerrar');
    if (anuncio && botonCerrar) {
        botonCerrar.addEventListener('click', function () {
anuncio.style.display = 'none';
        });
    } else {
        comsole.error("El anuncio o botón de cierre no se encontraron.");
        
    }
}); 
