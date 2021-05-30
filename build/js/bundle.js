document.addEventListener('DOMContentLoaded', function() {
    scrollNav();
    navegacionFija();
});

function navegacionFija() {
    // Registrar el Intersection Observer
    const barra = document.querySelector('.header');
    const observer = new IntersectionObserver(function(entries) {
        if (entries[0].isIntersecting) {
            barra.classList.remove('fijo');
        } else {
            barra.classList.add('fijo');
        }
    });

    // Elemento a observar
    observer.observe(document.querySelector('.video'));

}


function scrollNav() {
    const enlances = document.querySelectorAll('.navegacion a')
    enlances.forEach(function(enlace) {
        enlace.addEventListener('click', function(e) {
            e.preventDefault();

            const seccion = document.querySelector(e.target.attributes.href.value);
            seccion.scrollIntoView({
                behavior: 'smooth' // desplaza suavemente smooth
            });
        });
    });
}
document.addEventListener('DOMContentLoaded', function() {
    crearGaleria();
})

function crearGaleria() {
    const galeria = document.querySelector('.lista-galeria');
    for (let i = 1; i <= 12; i++) {
        const imagen = document.createElement('IMG');
        imagen.src = `build/img/thumb/${i}.webp`
        imagen.classList = i;
        imagen.onclick = mostrarIMagen;
        const lista = document.createElement('LI');
        lista.appendChild(imagen);
        galeria.appendChild(lista)
    }
}

function mostrarIMagen(e) {
    const claseImg = parseInt(e.target.classList.value);
    const body = document.querySelector('body');
    const overlay = document.createElement('DIV');
    const imagen = document.createElement('IMG');
    const cerrarImagen = document.createElement('P');

    imagen.src = `build/img/grande/${claseImg}.webp`;
    overlay.appendChild(imagen);
    overlay.classList.add('overlay');
    //Cuando se da click, cerrar la imagen
    overlay.onclick = function() {
        overlay.remove();
        body.classList.remove('fijarBody');
    }

    //Btn para Cerrar Imagen
    cerrarImagen.textContent = 'x';
    cerrarImagen.classList.add('btn-cerrar');
    overlay.appendChild(cerrarImagen);

    //Cuando se presiona, se cierra la imagen
    cerrarImagen.onclick = function() {
            body.classList.remove('fijarBody');
            overlay.remove();

        }
        // Mostra en el HTML
    body.appendChild(overlay);
    body.classList.add('fijarBody')
}