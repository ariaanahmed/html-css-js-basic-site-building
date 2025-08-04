const nextButton = document.querySelector('.next');
const prevButton = document.querySelector('.prev');
const slides = document.querySelectorAll('.slide');

let currentIdx = 0;

nextButton.addEventListener('click', () => {
    forwardSlides();

});

const forwardSlides = () => {
    const currentSlide = slides[currentIdx];
    currentSlide.style.animation = 'none';
    void currentSlide.offsetWidth;
    currentSlide.style.animation = 'next1 0.2s ease-in-out forwards';

    if (currentIdx >= slides.length - 1) {
        currentIdx = 0;
    } else {
        currentIdx++;
    }

    const incommingSlide = slides[currentIdx];
    incommingSlide.style.animation = 'none';
    void incommingSlide.offsetWidth;
    incommingSlide.style.animation = 'next2 0.2s ease-in-out forwards';
    setActiveDot();
}

prevButton.addEventListener('click', () => {
    previousSlide();

});

const previousSlide = () => {
    const currentSlide = slides[currentIdx];
    currentSlide.style.animation = 'none';
    void currentSlide.offsetWidth;
    currentSlide.style.animation = 'prev1 0.2s ease-in-out forwards';

    if (currentIdx === 0) {
        currentIdx = slides.length - 1;
    } else {
        currentIdx--;
    }

    const incommingSlide = slides[currentIdx];
    incommingSlide.style.animation = 'none';
    void incommingSlide.offsetWidth;
    incommingSlide.style.animation = 'prev2 0.2s ease-in-out forwards';
    setActiveDot();
}

// Autoplay Slide Function
let deleteInterval;
const autoPlaySlide = () => {
    deleteInterval = setInterval(() => {
        forwardSlides();
    }, 4000);
};

// Stop Autoplay on mouseover
const sliderContainer = document.querySelector('.slide-container');
sliderContainer.addEventListener('mouseover', () => {
    clearInterval(deleteInterval);
});


// Start Auto Sliding on mouseout
sliderContainer.addEventListener('mouseout', () => {
    autoPlaySlide();
    setActiveDot();
})

// set dot to active slider
const dots = document.querySelectorAll('.dot');
const setActiveDot = () => {
    for (let i = 0; i < dots.length; i++) {
        let removeActiveDot = dots[i];
        removeActiveDot.classList.remove('active')
    }
    let addActiveDot = dots[currentIdx];
    addActiveDot.classList.add('active');
}


// show the current slider based on clicked dot
for (let dotIdx = 0; dotIdx < dots.length; dotIdx++) {
    const activeDot = dots[dotIdx];
    
    
    activeDot.addEventListener('click', () => {
        if (dotIdx === currentIdx) {
            return;
        }
        
        const prevSlideIdx = currentIdx;
        
        console.log(prevSlideIdx, 'slider ta koto tomo bar slide hoyeche, eta 0 theke shuru hocche');
        console.log(dotIdx, 'dotIdx loop track rakhche');
        

        const currentSlideExitAnim = slides[prevSlideIdx];
        currentSlideExitAnim.style.animation = 'none';
        void currentSlideExitAnim.offsetWidth;

        if (dotIdx > prevSlideIdx) {
            currentSlideExitAnim.style.animation = 'next1 0.2s ease-in-out forwards';
        } else {
            currentSlideExitAnim.style.animation = 'prev1 0.2s ease-in-out forwards';
        }

        currentIdx = dotIdx;

        const incommingSlideEntryAnim = slides[currentIdx];
        incommingSlideEntryAnim.style.animation = 'none';
        void incommingSlideEntryAnim.offsetWidth;

        if (dotIdx > prevSlideIdx) {
            incommingSlideEntryAnim.style.animation = 'next2 0.2s ease-in-out forwards';
        } else {
            incommingSlideEntryAnim.style.animation = 'prev2 0.2s ease-in-out forwards';

        }

        setActiveDot();
    })
}

autoPlaySlide()