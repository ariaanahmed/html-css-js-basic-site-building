const openBtn = document.querySelector('.open-btn');
const closeBtn = document.querySelector('.close-btn');
const smMenuEl = document.querySelector('.sm-menu');

openBtn.addEventListener('click', () => {
    closeBtn.style.display = 'block';
    smMenuEl.style.display = 'block';
    openBtn.style.display = 'none';
});

closeBtn.addEventListener('click', () => {
    closeBtn.style.display = 'none';
    smMenuEl.style.display = 'none';
    openBtn.style.display = 'block';
});