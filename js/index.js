let index = 0;

function moveSlide(step) {
  const slides = document.querySelector('.slides');
  const totalSlides = document.querySelectorAll('.slide').length;
  
  index = (index + step + totalSlides) % totalSlides;
  slides.style.transform = `translateX(${-index * 100}%)`;
}

// Opcional: Rotação automática a cada 5 segundos
setInterval(() => moveSlide(1), 5000);
