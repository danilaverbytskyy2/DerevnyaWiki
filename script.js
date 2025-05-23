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
            avatar: `../img/friend-${i+1}.jpg`
        }));

        friends[0].name = 'Даня';

        peopleGrid.innerHTML = friends.map(f => `
            <a href="pages/friend-${f.id}.html" class="person-card">
                <img src="${f.avatar}" alt="${f.name}" class="person-avatar">
                <h3>${f.name}</h3>
            </a>
        `).join('');
    }
});