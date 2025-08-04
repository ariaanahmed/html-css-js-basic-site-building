const openButton = document.querySelector('.open-btn i');
const closeButton = document.querySelector('.close-btn i')
const smallMenu = document.querySelector('.sm-menu');

openButton.addEventListener('click', () => {
    smallMenu.classList.add('show')
    setTimeout(() => {
        openButton.style.display = 'none';
        closeButton.style.display = 'block';
    }, 0);

});

closeButton.addEventListener('click', () => {
    smallMenu.classList.remove('show')
    setTimeout(() => {
        openButton.style.display = 'block';
        closeButton.style.display = 'none'
    }, 1000);
})