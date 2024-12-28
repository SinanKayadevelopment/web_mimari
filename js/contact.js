// EmailJS konfigürasyonu
emailjs.init("Y12CfCj5Zew0M71Ph");

document.addEventListener('DOMContentLoaded', function() {
    // Sadece form input animasyonları için
    const formGroups = document.querySelectorAll('.form-group');

    formGroups.forEach(group => {
        const input = group.querySelector('input, textarea, select');
        if (input) {
            // Focus olduğunda label'ı yukarı taşı
            input.addEventListener('focus', () => {
                group.classList.add('focused');
            });

            // Focus'tan çıkınca ve değer boşsa label'ı eski yerine getir
            input.addEventListener('blur', () => {
                if (!input.value) {
                    group.classList.remove('focused');
                }
            });

            // Sayfa yüklendiğinde değer varsa label'ı yukarıda tut
            if (input.value) {
                group.classList.add('focused');
            }
        }
    });

    // Form submit animasyonu
    const submitBtn = document.querySelector('.submit-btn');
    if (submitBtn) {
        submitBtn.addEventListener('click', function() {
            // Submit butonuna tıklandığında loading efekti
            this.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Gönderiliyor...';
        });
    }
}); 