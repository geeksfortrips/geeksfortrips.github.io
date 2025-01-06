const images = document.querySelectorAll('.carousel img');
        const buttons = document.querySelectorAll('.carousel-buttons button');
        let currentIndex = 0;

        function showSlide(index) {
            images.forEach((img, i) => {
                img.classList.toggle('active', i === index);
                buttons[i].classList.toggle('active', i === index);
            });
        }

        function nextSlide() {
            currentIndex = (currentIndex + 1) % images.length;
            showSlide(currentIndex);
        }

        buttons.forEach((button, index) => {
            button.addEventListener('click', () => {
                currentIndex = index;
                showSlide(currentIndex);
            });
        });

        setInterval(nextSlide, 2000);