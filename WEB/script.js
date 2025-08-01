// Espera a que todo el contenido del DOM esté cargado
document.addEventListener('DOMContentLoaded', () => {

    // --- Lógica para el menú móvil ---
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // Cerrar menú móvil al hacer clic en un enlace del menú
    document.querySelectorAll('#mobile-menu a').forEach(link => {
        link.addEventListener('click', () => {
            if (mobileMenu) {
                mobileMenu.classList.add('hidden');
            }
        });
    });

    // --- Scroll Spy optimizado con Intersection Observer ---
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    // Opciones para el observer (qué y cuándo detectar)
    const observerOptions = {
        root: null, // Observa intersecciones relativas al viewport
        rootMargin: '0px',
        threshold: 0.4 // Se activa cuando el 40% de la sección es visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            // Si una sección está visible en el viewport
            if (entry.isIntersecting) {
                const currentId = entry.target.getAttribute('id');
                
                // Quita la clase activa de todos los enlaces de navegación
                navLinks.forEach(link => {
                    link.classList.remove('nav-link-active');
                });

                // Agrega la clase activa al enlace correspondiente (móvil y desktop)
                const activeLinks = document.querySelectorAll(`a[href="#${currentId}"]`);
                activeLinks.forEach(link => {
                     link.classList.add('nav-link-active');
                });
            }
        });
    }, observerOptions);

    // Aplica el observador a cada sección de la página
    sections.forEach(section => {
        observer.observe(section);
    });
    
});