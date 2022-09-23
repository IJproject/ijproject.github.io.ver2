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

{
  const red = document.getElementById('back-red');
  const yellow = document.getElementById('back-yellow');
  const green = document.getElementById('back-green');
  const blue = document.getElementById('back-blue');
  const purple = document.getElementById('back-purple');
  const colorful = document.getElementById('back-colorful');

  const backgroundOdd = document.querySelectorAll('section:nth-child(odd)');
  const backgroundEven = document.querySelectorAll('section:nth-child(even)');
  const backgroundAll = document.querySelectorAll('section');

  function classReset (target) {
    target.classList.remove(target.className);
  }

  red.addEventListener('click', () => {
    backgroundOdd.forEach((odd) => {
      classReset(odd);
      odd.classList.add('pale-red');
    });
    backgroundEven.forEach((even) => {
      classReset(even);
      even.classList.add('normal-red');
    });
  });

  yellow.addEventListener('click', () => {
    backgroundOdd.forEach((odd) => {
      classReset(odd);
      odd.classList.add('pale-yellow');
    });
    backgroundEven.forEach((even) => {
      classReset(even);
      even.classList.add('normal-yellow');
    });
  });

  green.addEventListener('click', () => {
    backgroundOdd.forEach((odd) => {
      classReset(odd);
      odd.classList.add('pale-green');
    });
    backgroundEven.forEach((even) => {
      classReset(even);
      even.classList.add('normal-green');
    });
  });

  blue.addEventListener('click', () => {
    backgroundOdd.forEach((odd) => {
      classReset(odd);
      odd.classList.add('pale-blue');
    });
    backgroundEven.forEach((even) => {
      classReset(even);
      even.classList.add('normal-blue');
    });
  });

  purple.addEventListener('click', () => {
    backgroundOdd.forEach((odd) => {
      classReset(odd);
      odd.classList.add('pale-purple');
    });
    backgroundEven.forEach((even) => {
      classReset(even);
      even.classList.add('normal-purple');
    });
  });

  colorful.addEventListener('click', () => {
    let i = 0;
    backgroundAll.forEach((all) => {
      classReset(all);
      if (i === 0) {
        all.classList.add('pale-red');
      }
      else if (i === 1) {
        all.classList.add('pale-yellow');
      }
      else if (i === 2) {
        all.classList.add('pale-green');
      }
      else if (i === 3) {
        all.classList.add('pale-blue');
      }
      else if (i === 4) {
        all.classList.add('pale-purple');
      }
      i++;
    });
  });
}
