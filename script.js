// Генерация карточек друзей
const peopleGrid = document.getElementById('peopleGrid');
const friends = Array.from({length: 18}, (_, i) => ({
    id: i+1,
    name: `Друг ${i+1}`,
    avatar: 'img/placeholder-avatar.jpg'
}));

function generatePersonCard(friend) {
    return `
        <a href="pages/friend-${friend.id}.html" class="person-card">
            <img src="${friend.avatar}" alt="${friend.name}" class="person-avatar">
            <h3>${friend.name}</h3>
        </a>
    `;
}

// Заполнение сетки
peopleGrid.innerHTML = friends.map(generatePersonCard).join('');

// Плавный скролл
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const peopleGrid = document.getElementById('peopleGrid');
    if(peopleGrid) {
        const friends = Array.from({length: 18}, (_, i) => ({
            id: i+1,
            name: `Друг ${i+1}`,
            avatar: `./img/friend-${i+1}.jpg`
        }));

        friends[0].name = 'Даня';
        friends[1].name = 'Полина';
        friends[2].name = 'Владик';
        friends[3].name = 'Диана';
        friends[4].name = 'Тимур';
        friends[5].name = 'Оксана';
        friends[6].name = 'Егор';
        friends[7].name = 'Марго';
        friends[8].name = 'Last.fm Bot';
        friends[9].name = 'Поля';
        friends[10].name = 'Коля';
        friends[11].name = 'Андрей';
        friends[12].name = 'Ваня';
        friends[13].name = 'Лана';
        friends[14].name = 'Диана';
        friends[15].name = 'Матвей';
        friends[16].name = 'Сабина';
        friends[17].name = 'Юля';

        peopleGrid.innerHTML = friends.map(f => `
            <a href="pages/friend-${f.id}.html" class="person-card">
                <img src="${f.avatar}" alt="${f.name}" class="person-avatar">
                <h3>${f.name}</h3>
            </a>
        `).join('');
    }
});