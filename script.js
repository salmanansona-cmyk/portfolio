document.addEventListener('DOMContentLoaded', function() {
    
    // 1. Кнопка "Подробнее"
    const btnMore = document.querySelector('#showMore');
    if (btnMore) {
        const moreText = document.querySelector('#moreText');
        
        btnMore.addEventListener('click', function() {
            moreText.classList.toggle('d-none');
            
            if (moreText.classList.contains('d-none')) {
                btnMore.textContent = 'Подробнее';
            } else {
                btnMore.textContent = 'Скрыть';
            }
        });
    }

    // 2. Проверка формы
    const form = document.querySelector('#contactForm');
    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault(); // Отменяем перезагрузку
            
            const name = document.querySelector('#name').value;
            const email = document.querySelector('#email').value;
            const message = document.querySelector('#formMessage');
            
            if (name === '' || email === '' || email.indexOf('@') === -1) {
                message.textContent = 'Пожалуйста, заполните все поля и проверьте email!';
                message.style.color = 'red';
            } else {
                message.textContent = 'Спасибо, ' + name + '! Сообщение отправлено.';
                message.style.color = 'green';
                form.reset(); // Очищаем форму
            }
        });
    }

    // 3. Карточки навыков (динамический блок)
    const projectsList = document.querySelector('#projectsList');
    if (projectsList) {
        const skills = [
            { title: 'Контент', desc: 'Создание интересного контента' },
            { title: 'HTML', desc: 'Структура страниц' },
            { title: 'CSS и Bootstrap', desc: 'Оформление и адаптивность' }
        ];

        for (let i = 0; i < skills.length; i++) {
            const div = document.createElement('div');
            div.className = 'col-md-4 mb-3';
            
            // Собираем карточку обычным сложением строк
            let cardHTML = '<div class="custom-card p-3 text-center h-100">';
            cardHTML += '<h4 class="welcome-title" style="font-size: 1.2rem;">' + skills[i].title + '</h4>';
            cardHTML += '<p class="card-text" style="font-size: 1rem;">' + skills[i].desc + '</p>';
            cardHTML += '</div>';
            
            div.innerHTML = cardHTML;
            projectsList.appendChild(div);
        }
    }
});