let currentIndex = 0;
let autoSlideInterval;

function moveSlides(direction) {
  const carousel = document.querySelector(".carousel");
  const slides = document.querySelectorAll(".carousel-slide");
  const totalSlides = slides.length;

  currentIndex = (currentIndex + direction + totalSlides) % totalSlides;
  carousel.style.transform = `translateX(-${currentIndex * 100}%)`;

  resetAutoplay();
}

function autoSlide() {
  moveSlides(1);
}

function resetAutoplay() {
  clearInterval(autoSlideInterval);
  autoSlideInterval = setInterval(autoSlide, 2000);
}

window.onload = function () {
  autoSlideInterval = setInterval(autoSlide, 2000);
};

const carouselContainer = document.querySelector(".carousel-container");
carouselContainer.addEventListener("mouseover", () =>
  clearInterval(autoSlideInterval)
);
carouselContainer.addEventListener("mouseout", resetAutoplay);

// scroll to top

const scrollToTopBtn = document.getElementById("scrollToTopBtn");

scrollToTopBtn.addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
