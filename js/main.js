document.addEventListener('DOMContentLoaded', function() {
    // Aktif sayfayı belirleme
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });

    // Mobil menü toggle
    const mobileMenu = document.querySelector('.mobile-menu');
    const navContainer = document.querySelector('.nav-links');
    
    mobileMenu.addEventListener('click', () => {
        navContainer.classList.toggle('show');
        mobileMenu.classList.toggle('active');
    });
}); 