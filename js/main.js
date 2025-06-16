document.addEventListener('DOMContentLoaded', function() {
    // Get all carousel containers on the page
    const carouselContainers = document.querySelectorAll('.product-carousel-container');
    
    // Set up each carousel individually
    carouselContainers.forEach((container, index) => {
        const carousel = container.querySelector('.carousel');
        const prevBtn = container.querySelector('.carousel-prev-btn');
        const nextBtn = container.querySelector('.carousel-next-btn');
        
        let scrollAmount = 0;
        const cardWidth = 216; 
        
        // Initially hide prev button
        prevBtn.style.display = 'none';
        
        nextBtn.addEventListener('click', function() {
            scrollAmount += cardWidth * 3;
            if (scrollAmount > carousel.scrollWidth - carousel.clientWidth) {
                scrollAmount = carousel.scrollWidth - carousel.clientWidth;
            }
            carousel.scrollLeft = scrollAmount;
            
            // Show prev button when scrolled
            if (scrollAmount > 0) {
                prevBtn.style.display = 'flex';
            }
            
            // Hide next button when reached end
            if (scrollAmount >= carousel.scrollWidth - carousel.clientWidth) {
                nextBtn.style.display = 'none';
            }
        });
        
        prevBtn.addEventListener('click', function() {
            scrollAmount -= cardWidth * 3;
            if (scrollAmount < 0) {
                scrollAmount = 0;
            }
            carousel.scrollLeft = scrollAmount;
            
            // Hide prev button when at start
            if (scrollAmount === 0) {
                prevBtn.style.display = 'none';
            }
            
            // Show next button when not at end
            if (scrollAmount < carousel.scrollWidth - carousel.clientWidth) {
                nextBtn.style.display = 'flex';
            }
        });
    });
});