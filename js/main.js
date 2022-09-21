'use strict';

{
  const menu = document.getElementById('menu');
  const open = document.querySelector('.menu-open');
  const close = document.getElementById('close');
  const main = document.querySelector('main');

  function menuOpen () {
    open.classList.add('hidden');
    menu.classList.add('show');
  };

  function menuClose () {
    open.classList.remove('hidden');
    menu.classList.remove('show');
  };

  open.addEventListener('click', () => {
    menuOpen();
  });

  close.addEventListener('click', () => {
    menuClose();
  });

  main.addEventListener('click', () => {
    menuClose();
  });
}

{
  const next = document.getElementById('next');
  const prev = document.getElementById('prev');
  const list = document.querySelector('.carousel-list');
  const slides = list.children;
  let currentIndex = 0;

  function updateButtons () {
    prev.classList.remove('hidden');
    next.classList.remove('hidden');

    if(currentIndex === 0){
      prev.classList.add('hidden');
    }
    else if(currentIndex === slides.length - 1){
      next.classList.add('hidden');
    }
  }

  function moveSlides () {
    const slidewidth = slides[0].getBoundingClientRect().width;
    list.style.transform = `translateX(${-1 * slidewidth * currentIndex}px)`;
  }

  updateButtons();

  next.addEventListener('click', () => {
    currentIndex++;
    updateButtons();
    moveSlides();
  });

  prev.addEventListener('click', () => {
    currentIndex--;
    updateButtons();
    moveSlides();
  });
}

