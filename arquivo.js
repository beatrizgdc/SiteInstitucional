// seleciona o botão "Mostrar mais"
const btnShowMore = document.querySelector('#btnShowMore');

// seleciona o elemento que será exibido/ocultado
const hiddenContent = document.querySelector('#hiddenContent');

// adiciona um ouvinte de eventos ao botão
btnShowMore.addEventListener('click', function() {
  // verifica se o conteúdo está oculto
  if (hiddenContent.style.display === 'none') {
    // exibe o conteúdo
    hiddenContent.style.display = 'block';
    // altera o texto do botão
    btnShowMore.textContent = 'Mostrar menos';
  } else {
    // oculta o conteúdo
    hiddenContent.style.display = 'none';
    // altera o texto do botão
    btnShowMore.textContent = 'Mostrar mais';

     }
});
   const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let counter = 0;
const slideWidth = slides[0].clientWidth;

// ajusta a posição inicial dos slides
slides.forEach((slide, index) => {
  slide.style.left = `${index * 100}%`;
});

// função para mover os slides
const moveSlides = (amount) => {
  counter += amount;
  slides.forEach((slide) => {
    slide.style.transform = `translateX(-${counter * slideWidth}px)`;
  });
 
 