const inputEl = document.querySelector('.switch-container input')
const body = document.querySelector('body');
const toggleButton = document.querySelector('.slider-btn')

toggleButton.addEventListener('click', () => {
    body.classList.toggle('darkmode');
})