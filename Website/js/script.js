const newsItems = document.querySelectorAll('.news-item');

newsItems.forEach(item => {
    item.addEventListener('click', () => {
        const content = item.querySelector('.news-content');
        content.style.display = content.style.display === 'block' ? 'none' : 'block';
    });
});