document.addEventListener('DOMContentLoaded', function () {
    const images = document.querySelectorAll('.carousel .carousel-images img');
    const buttons = document.querySelectorAll('.carousel-buttons button');
    const carouselImages = document.querySelector('.carousel-images');
    let currentIndex = 0;

    // Set up the first image
    images[currentIndex].classList.add('active');

    // Function to show the correct image based on the index
    function showSlide(index) {
        const totalImages = images.length;
        const offset = -index * 100; // Offset based on index (100% per image)

        // Animate the sliding of the images
        carouselImages.style.transition = 'transform 0.5s ease-in-out';
        carouselImages.style.transform = `translateX(${offset}%)`;

        // Update active state for buttons
        buttons.forEach((button, i) => {
            button.classList.toggle('active', i === index);
        });

        // Ensure only the active image is visible
        images.forEach((img, i) => {
            img.classList.toggle('active', i === index);
        });
    }

    // Function to show the next slide (with sliding effect)
    function nextSlide() {
        currentIndex = (currentIndex + 1) % images.length; // Wrap around to the first image
        showSlide(currentIndex);
    }

    // Event listener for button clicks to navigate to specific images
    buttons.forEach((button, index) => {
        button.addEventListener('click', () => {
            currentIndex = index;
            showSlide(currentIndex);
        });
    });

    // Automatically move to the next slide every 2 seconds
    setInterval(nextSlide, 4000);

    // Initial setup: Show first slide
    showSlide(currentIndex);
});
