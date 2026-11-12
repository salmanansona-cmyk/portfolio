document.addEventListener('DOMContentLoaded', () => {
    const btnShowMore = document.querySelector('#showMore');
    const moreText = document.querySelector('#moreText');

    if (btnShowMore && moreText) {
        btnShowMore.addEventListener('click', () => {
            moreText.classList.toggle('d-none');
            btnShowMore.textContent = moreText.classList.contains('d-none') ? 'Подробнее' : 'Скрыть';
        });
    }

    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        if (link.href === window.location.href) {
            link.classList.add('active-link');
        }
    });

    const contactForm = document.querySelector('#contactForm');
    const formMessage = document.querySelector('#formMessage');

    if (contactForm) {
        contactForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const name = document.querySelector('#name').value;
            const email = document.querySelector('#email').value;
            const comment = document.querySelector('#comment').value;

            if (!name || !email.includes('@') || !comment) {
                formMessage.textContent = 'Заполни все поля и проверь email';
                formMessage.className = 'text-danger mt-3';
                return;
            }
            formMessage.textContent = `Спасибо, ${name}! Твое сообщение отправлено.`;
            formMessage.className = 'text-success mt-3';
            contactForm.reset();
        });
    }

    const projectsList = document.querySelector('#projects');
    if (projectsList) {
        const projects = [
            { title: 'Контент', tech: 'Создание интересного контента' },
            { title: 'HTML', tech: 'Структура страниц' },
            { title: 'CSS и Bootstrap', tech: 'Оформление и адаптивность' }
        ];

        projectsList.innerHTML = projects.map(project => `
            <div class="col-md-4 mb-3">
                <article class="custom-card p-3 h-100">
                    <h4 class="welcome-title" style="font-size: 1.2rem;">${project.title}</h4>
                    <p class="card-text" style="font-size: 1rem;">${project.tech}</p>
                </article>
            </div>
        `).join('');
    }
});