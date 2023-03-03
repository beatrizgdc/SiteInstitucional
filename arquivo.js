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
   /* Arquivo JavaScript que adiciona animações ao currículo */

/* Adiciona animação à seção "Experiência" */
var secaoExperiencia = document.getElementById('experiencia');
if (secaoExperiencia) {
    secaoExperiencia.addEventListener('animationstart', function() {
        console.log('Animação de experiência começou.');
    });

    secaoExperiencia.addEventListener('animationend', function() {
        console.log('Animação de experiência terminou.');
    });

    secaoExperiencia.classList.add('animated', 'fadeInUp');
}

/* Adiciona animação à seção "Educação" */
var secaoEducacao = document.getElementById('educacao');
if (secaoEducacao) {
    secaoEducacao.addEventListener('animationstart', function() {
        console.log('Animação de educação começou.');
    });

    secaoEducacao.addEventListener('animationend', function() {
        console.log('Animação de educação terminou.');
    });

    secaoEducacao.classList.add('animated', 'fadeInUp');

