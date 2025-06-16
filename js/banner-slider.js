// Run this code when the entire HTML content has loaded
document.addEventListener('DOMContentLoaded', function() {

    // Get reference to the slider container
    const slider = document.getElementById('heroSlider');

    // Get references to the navigation buttons
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    // Get all dot (indicator) elements
    const dots = document.querySelectorAll('.dot');

    // Start from the first slide (index 0)
    let currentSlide = 0;

    // Count how many slides are present
    const slideCount = document.querySelectorAll('.hero-slide').length;

    // Start the automatic slide change every 3 seconds
    let sliderInterval = setInterval(nextSlide, 3000);

    // Function to display a specific slide
    function showSlide(index) {
        // If index is less than 0, go to the last slide
        if (index < 0) {
            index = slideCount - 1;
        } 
        // If index exceeds the last slide, go to the first slide
        else if (index >= slideCount) {
            index = 0;
        }

        // Update the current slide index
        currentSlide = index;

        // Move the slider using translateX based on current slide
        // Here, you assume each slide takes 20% of the container width
        slider.style.transform = `translateX(-${currentSlide * 20}%)`;

        // Optional: Alternative code to move based on slide count (commented out)
        // slider.style.transform = `translateX(-${(100 / slideCount) * currentSlide}%)`;

        // Update the active class on dots (indicators)
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === currentSlide); // only the current slide dot will be active
        });

        // Reset the interval so autoplay continues from current slide
        clearInterval(sliderInterval);
        sliderInterval = setInterval(nextSlide, 5000);
    }

    // Function to show the next slide
    function nextSlide() {
        showSlide(currentSlide + 1);
    }

    // Function to show the previous slide
    function prevSlide() {
        showSlide(currentSlide - 1);
    }

    // Add click event to "Next" button
    nextBtn.addEventListener('click', nextSlide);

    // Add click event to "Previous" button
    prevBtn.addEventListener('click', prevSlide);

    // Add click events to each dot (indicator)
    dots.forEach(dot => {
        dot.addEventListener('click', function() {
            // Get the index from the data attribute and go to that slide
            const slideIndex = parseInt(this.getAttribute('data-index'));
            showSlide(slideIndex);
        });
    });

    // Get the whole banner container for hover events
    const heroContainer = document.querySelector('.hero-banner');

    // Pause auto sliding when mouse is over the banner
    heroContainer.addEventListener('mouseenter', function() {
        clearInterval(sliderInterval); // stop the interval
    });

    // Resume auto sliding when mouse leaves the banner
    heroContainer.addEventListener('mouseleave', function() {
        sliderInterval = setInterval(nextSlide, 5000); // restart the interval
    });
});
