const gallery = document.querySelector('.gallery');
const images = gallery.querySelectorAll('img');
let currentIndex = 0;

function showNextImage() {
    images[currentIndex].style.opacity = 0;
    currentIndex = (currentIndex + 1) % images.length;
    images[currentIndex].style.opacity = 1;
}

setInterval(showNextImage, 5000);