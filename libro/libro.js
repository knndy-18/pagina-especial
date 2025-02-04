document.addEventListener('DOMContentLoaded', () => {
    const pages = document.querySelectorAll('.page');
    const prevBtn = document.getElementById('prev');
    const nextBtn = document.getElementById('next');
    const currentPageSpan = document.querySelector('.current-page');
    const totalPagesSpan = document.querySelector('.total-pages');
    
    let currentPage = 0;
    let isAnimating = false;
    const totalPages = pages.length;

    // Inicializar indicador de página
    totalPagesSpan.textContent = totalPages;
    updatePageIndicator();

    function updatePageIndicator() {
        currentPageSpan.textContent = currentPage + 1;
    }

    function navigate(direction) {
        if (isAnimating) return;
        isAnimating = true;
        
        const newPage = currentPage + direction;
        if (newPage < 0 || newPage >= totalPages) {
            isAnimating = false;
            return;
        }

        // Actualizar clases activas
        pages[currentPage].classList.remove('active');
        pages[newPage].classList.add('active');

        // Animación de transición
        pages.forEach((page, index) => {
            if (index === newPage) {
                page.style.transform = 'rotateY(0deg)';
                page.style.zIndex = totalPages - Math.abs(newPage - index);
            } else if (index < newPage) {
                page.style.transform = 'rotateY(-180deg)';
                page.style.zIndex = newPage - index;
            } else {
                page.style.transform = 'rotateY(180deg)';
                page.style.zIndex = index - newPage;
            }
        });

        currentPage = newPage;
        updatePageIndicator();

        // Resetear estado de animación
        setTimeout(() => {
            isAnimating = false;
        }, 600);
    }

    // Eventos de navegación
    prevBtn.addEventListener('click', () => navigate(-1));
    nextBtn.addEventListener('click', () => navigate(1));

    // Navegación por teclado
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') navigate(-1);
        if (e.key === 'ArrowRight') navigate(1);
    });

    // Soporte táctil
    let touchStartX = 0;
    const touchThreshold = 50;

    document.addEventListener('touchstart', (e) => {
        touchStartX = e.touches[0].clientX;
    }, { passive: true });

    document.addEventListener('touchend', (e) => {
        const touchEndX = e.changedTouches[0].clientX;
        const deltaX = touchStartX - touchEndX;

        if (Math.abs(deltaX) > touchThreshold) {
            navigate(deltaX > 0 ? 1 : -1);
        }
    });

    // Inicializar posición de las páginas
    pages.forEach((page, index) => {
        page.style.zIndex = totalPages - index;
        if (index !== 0) {
            page.style.transform = 'rotateY(180deg)';
        }
    });
});