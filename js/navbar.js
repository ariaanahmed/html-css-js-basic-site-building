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


// Disable F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+U
document.addEventListener('keydown', function (event) {
    if (event.key === "F12" || (event.ctrlKey && event.shiftKey && event.key === 'I') || (event.ctrlKey && event.shiftKey && event.key === 'J') || (event.ctrlKey && event.key === 'U')) {
        event.preventDefault();
    }
});


// disable right click on keyboard
document.addEventListener('contextmenu', function (event) {
    event.preventDefault();
});