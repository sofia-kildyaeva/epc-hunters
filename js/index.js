// Меню в мобильной версии
const button = document.querySelector('.button-menu')
const menu = document.querySelector('.navigation-links-search')
const buttonClose = document.querySelector('.button-menu-close')
const mainHidden = document.querySelector('.main-hidden')


button.addEventListener('click', (e) => {
    menu.classList.toggle('links-search-active');
    buttonClose.classList.toggle('button-menu-close-active')
    mainHidden.classList.toggle('hidden-active')
    button.classList.toggle('button-menu-close')
})

buttonClose.addEventListener('click', (e) => {
    menu.classList.toggle('links-search-active');
    buttonClose.classList.toggle('button-menu-close-active')
    mainHidden.classList.toggle('hidden-active')
    button.classList.toggle('button-menu-close')
})



// Слайдер
const slaiders = document.querySelectorAll('.step');
let currentIndex = 0;


function showImage(index) {
    slaiders[currentIndex].classList.remove('slaider-active');
    slaiders[index].classList.add('slaider-active');
    currentIndex = index;
}

document
  .querySelector('.slaider-button')
  .addEventListener('click', function (event) {
    console.log(event.target);
    if (event.target.classList.contains('prev')) {
      let index = currentIndex - 1;
      if (index < 0) {
        index = slaiders.length - 1;
      }
      
      showImage(index);
    } else if (event.target.classList.contains('next')) {
      let index = currentIndex + 1;
      if (index >= slaiders.length) {
        index = 0;
      }
      showImage(index);
    }
  });

showImage(currentIndex);