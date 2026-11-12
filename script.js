document.addEventListener('DOMContentLoaded', () => {
    const kbContainer = document.getElementById('kbContainer');
    const searchInput = document.getElementById('searchInput');
    const filterTabs = document.getElementById('filterTabs');
    const topicsCounter = document.getElementById('topicsCounter');
    const expandAllBtn = document.getElementById('expandAllBtn');
    const collapseAllBtn = document.getElementById('collapseAllBtn');

    let currentFilter = 'all';
    let currentSearch = '';

    // Функція відмальовки бази знань з data.js
    function renderKnowledgeBase() {
        kbContainer.innerHTML = '';
        let visibleTopicsCount = 0;

        qaKnowledgeBase.forEach(section => {
            // Перевірка фільтрації за вкладкою
            if (currentFilter !== 'all' && section.category !== currentFilter) {
                return;
            }

            // Фільтруємо теми всередині розділу за пошуковим запитом
            const filteredTopics = section.topics.filter(topic => {
                if (!currentSearch) return true;
                const searchLower = currentSearch.toLowerCase();
                const inTitle = topic.title.toLowerCase().includes(searchLower);
                const inContent = topic.content.toLowerCase().includes(searchLower);
                const inTags = topic.tags && topic.tags.some(tag => tag.toLowerCase().includes(searchLower));
                return inTitle || inContent || inTags;
            });

            if (filteredTopics.length === 0) return;

            // Створюємо секцію
            const sectionEl = document.createElement('section');
            sectionEl.className = 'category-section';

            const headingEl = document.createElement('h2');
            headingEl.textContent = section.categoryTitle;
            sectionEl.appendChild(headingEl);

            // Створюємо гармошки для кожної теми
            filteredTopics.forEach(topic => {
                visibleTopicsCount++;
                const detailsEl = document.createElement('details');
                detailsEl.className = 'accordion';
                
                // Якщо введено пошуковий запит — розгортаємо знайдені картки
                if (currentSearch.length >= 2) {
                    detailsEl.open = true;
                }

                const summaryEl = document.createElement('summary');
                summaryEl.textContent = topic.title;

                const bodyEl = document.createElement('div');
                bodyEl.className = 'accordion-body';
                bodyEl.innerHTML = topic.content;

                // Додаємо теги внизу картки
                if (topic.tags && topic.tags.length > 0) {
                    const tagsContainer = document.createElement('div');
                    tagsContainer.className = 'tags-list';
                    topic.tags.forEach(tag => {
                        const tagSpan = document.createElement('span');
                        tagSpan.className = 'tag-item';
                        tagSpan.textContent = `#${tag}`;
                        tagsContainer.appendChild(tagSpan);
                    });
                    bodyEl.appendChild(tagsContainer);
                }

                detailsEl.appendChild(summaryEl);
                detailsEl.appendChild(bodyEl);
                sectionEl.appendChild(detailsEl);
            });

            kbContainer.appendChild(sectionEl);
        });

        // Оновлюємо лічильник або показуємо повідомлення, якщо нічого не знайдено
        if (visibleTopicsCount === 0) {
            kbContainer.innerHTML = `<div class="empty-state">За запитом «${currentSearch}» нічого не знайдено. Спробуйте інше ключове слово.</div>`;
            topicsCounter.textContent = 'Знайдено тем: 0';
        } else {
            topicsCounter.textContent = `Відображається тем: ${visibleTopicsCount}`;
        }
    }

    // Пошук в реальному часі
    searchInput.addEventListener('input', (e) => {
        currentSearch = e.target.value.trim();
        renderKnowledgeBase();
    });

    // Перемикання категорій (табів)
    filterTabs.addEventListener('click', (e) => {
        if (!e.target.classList.contains('tab-btn')) return;

        document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
        e.target.classList.add('active');

        currentFilter = e.target.dataset.filter;
        renderKnowledgeBase();
    });

    // Кнопка "Розгорнути все"
    expandAllBtn.addEventListener('click', () => {
        document.querySelectorAll('.accordion').forEach(acc => acc.open = true);
    });

    // Кнопка "Згорнути все"
    collapseAllBtn.addEventListener('click', () => {
        document.querySelectorAll('.accordion').forEach(acc => acc.open = false);
    });

    // Перший запуск
    renderKnowledgeBase();
});