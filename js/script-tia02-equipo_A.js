document.addEventListener('DOMContentLoaded', function() {
    // Agregar boton dinamico
    const boton = document.createElement('button');
    boton.textContent = 'Haz clic aquí';
    boton.className = 'btn btn-primary mt-3';
    boton.addEventListener('click', function() {
        alert('¡Gracias por visitar el Proyecto PIA!');
        
        // Efecto de cambio de tamaño en el boton
        boton.style.transform = 'scale(1.2)';
        setTimeout(() => {
            boton.style.transform = 'scale(1)';
        }, 200);
    });

    const heroSection = document.querySelector('.hero-section');
    heroSection.appendChild(boton);

    // Cambio de color del titulo al hacer scroll
    const titulo = document.querySelector('.hero-section h1');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            titulo.style.color = 'red';
        } else {
            titulo.style.color = 'white';
        }
    });
});
