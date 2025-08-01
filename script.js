// Este script se encarga de la interactividad del menú de navegación móvil.

document.addEventListener('DOMContentLoaded', () => {
    // Selecciona el botón del menú móvil y el menú desplegable por sus IDs.
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    
    // Selecciona todos los enlaces de navegación.
    const navLinks = document.querySelectorAll('.nav-link');

    // Agrega un evento 'click' al botón del menú.
    // Cuando se hace clic, alterna la clase 'hidden' en el menú para mostrarlo u ocultarlo.
    mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

    // Agrega un evento 'click' a cada enlace de la navegación.
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            // Si el menú móvil está visible, lo oculta al hacer clic en un enlace.
            // Esto es útil para que el menú se cierre automáticamente después de seleccionar una sección.
            if (!mobileMenu.classList.contains('hidden')) {
                mobileMenu.classList.add('hidden');
            }
        });
    });
});
