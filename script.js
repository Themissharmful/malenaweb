// script.js

const slidesContainer = document.querySelector('.slides');
const slideElements   = document.querySelectorAll('.slide');
const prevBtn         = document.querySelector('.prev');
const nextBtn         = document.querySelector('.next');

const totalSlides = slideElements.length; // En tu caso, 14
let currentIndex   = 0; // Comienza en la primera diapositiva (índice 0)

/**
 * Muestra la diapositiva dada por 'index'.
 * Ajusta el transform para mover la 'cinta' horizontal.
 */
function showSlide(index) {
  // Validar que el índice no se salga del rango
  if (index < 0) {
    currentIndex = totalSlides - 1; 
  } else if (index >= totalSlides) {
    currentIndex = 0;
  } else {
    currentIndex = index;
  }

  // Mover la "cinta" de slides a la izquierda
  slidesContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Botón "prev" (anterior)
prevBtn.addEventListener('click', () => {
  showSlide(currentIndex - 1);
});

// Botón "next" (siguiente)
nextBtn.addEventListener('click', () => {
  showSlide(currentIndex + 1);
});

// Mostrar la diapositiva inicial
showSlide(currentIndex);
