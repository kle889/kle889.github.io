document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.querySelector('.product-carousel');
    const prevButton = document.querySelector('.carousel-button.prev');
    const nextButton = document.querySelector('.carousel-button.next');
    let currentIndex = 0;

    function updateCarousel() {
        const itemWidth = carousel.querySelector('.product').offsetWidth;
        const maxScroll = carousel.scrollWidth - carousel.clientWidth;
        const scrollPosition = currentIndex * itemWidth;
        
        carousel.scrollTo({
            left: Math.min(scrollPosition, maxScroll),
            behavior: 'smooth'
        });
    }

    prevButton.addEventListener('click', function() {
        if (currentIndex > 0) {
            currentIndex--;
            updateCarousel();
        }
    });

    nextButton.addEventListener('click', function() {
        const totalItems = carousel.querySelectorAll('.product').length;
        const itemsPerPage = window.innerWidth >= 1024 ? 3 : (window.innerWidth >= 768 ? 2 : 1);
        if (currentIndex < totalItems - itemsPerPage) {
            currentIndex++;
            updateCarousel();
        }
    });

    window.addEventListener('resize', updateCarousel);

    updateCarousel();
});