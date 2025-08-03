const openButton = document.querySelector('.open-btn i');
const closeButton = document.querySelector('.close-btn i')
const smallMenu = document.querySelector('.sm-menu');

openButton.addEventListener('click', () => {
    smallMenu.classList.add('show')
    openButton.style.display = 'none';
    closeButton.style.display = 'block';
});

closeButton.addEventListener('click', () => {
    smallMenu.classList.remove('show')
    setTimeout(() => {
        openButton.style.display = 'block';
        closeButton.style.display = 'none'
    }, 1000);
})


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