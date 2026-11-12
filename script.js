document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('searchInput');
    const accordions = document.querySelectorAll('.accordion');
    const sections = document.querySelectorAll('.category-section');

    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase().trim();

        accordions.forEach(accordion => {
            const text = accordion.textContent.toLowerCase();
            if (text.includes(query)) {
                accordion.style.display = 'block';
                if (query.length > 2) {
                    accordion.open = true; // Автоматично розгортати знайдені пункти при пошуку
                } else {
                    accordion.open = false;
                }
            } else {
                accordion.style.display = 'none';
            }
        });

        // Ховаємо цілі категорії, якщо в них нічого не знайдено
        sections.forEach(section => {
            const visibleAccordions = section.querySelectorAll('.accordion[style*="display: block"], .accordion:not([style*="display: none"])');
            if (visibleAccordions.length === 0) {
                section.style.display = 'none';
            } else {
                section.style.display = 'block';
            }
        });
    });
});