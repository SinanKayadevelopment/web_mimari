document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    // Filtreleme fonksiyonu
    function filterProjects(category) {
        projectCards.forEach(card => {
            if (category === 'all' || card.dataset.category === category) {
                card.style.display = 'block';
                setTimeout(() => card.classList.add('show'), 10);
            } else {
                card.style.display = 'none';
                card.classList.remove('show');
            }
        });
    }

    // Filtre butonları için click event
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Aktif buton stilini güncelle
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            // Projeleri filtrele
            const category = button.dataset.filter;
            filterProjects(category);
        });
    });
}); 