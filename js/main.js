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
    backgroundEven.forEach((even) => {
      classReset(even);
      even.classList.add('pale-red');
    });
    backgroundOdd.forEach((odd) => {
      classReset(odd);
      odd.classList.add('normal-red');
    });
  });

  yellow.addEventListener('click', () => {
    backgroundEven.forEach((even) => {
      classReset(even);
      even.classList.add('pale-yellow');
    });
    backgroundOdd.forEach((odd) => {
      classReset(odd);
      odd.classList.add('normal-yellow');
    });
  });

  green.addEventListener('click', () => {
    backgroundEven.forEach((even) => {
      classReset(even);
      even.classList.add('pale-green');
    });
    backgroundOdd.forEach((odd) => {
      classReset(odd);
      odd.classList.add('normal-green');
    });
  });

  blue.addEventListener('click', () => {
    backgroundEven.forEach((even) => {
      classReset(even);
      even.classList.add('pale-blue');
    });
    backgroundOdd.forEach((odd) => {
      classReset(odd);
      odd.classList.add('normal-blue');
    });
  });

  purple.addEventListener('click', () => {
    backgroundEven.forEach((even) => {
      classReset(even);
      even.classList.add('pale-purple');
    });
    backgroundOdd.forEach((odd) => {
      classReset(odd);
      odd.classList.add('normal-purple');
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




{
  const skillsType = document.querySelectorAll('.skills-type');
  const skillsContent = document.querySelectorAll('.skills-content');

  function classRemove (target) {
    if(target.classList.contains('active-tab')){
      target.classList.remove('active-tab');
    }
  }

  function tabChange (n) {
      skillsType.forEach((type) => {
        classRemove(type);
      });
      skillsContent.forEach((content) => {
        classRemove (content);
      });
      skillsType[n].classList.add('active-tab');
      skillsContent[n].classList.add('active-tab');
  }
  
  skillsType[0].addEventListener('click', () => {
    tabChange(0);
  });

  skillsType[1].addEventListener('click', () => {
    tabChange(1);
  });

  skillsType[2].addEventListener('click', () => {
    tabChange(2);
  });
}

{
  const attention = document.querySelector('.attention');

  function enter () {
    attention.classList.remove('hide-attention');
    attention.classList.add('enter-attention');
  }

  function exit () {
    attention.classList.remove('enter-attention');
    attention.classList.add('exit-attention');
  }

  function hide () {
    attention.classList.remove('exit-attention');
    attention.classList.add('hide-attention');
  }

  setTimeout(enter, 1000);
  setTimeout(exit, 7000);
  setTimeout(hide, 8000);
}

{
  const targets = document.querySelectorAll('section > div');

  targets.forEach((target) => {
    function callback(entries) {
      console.log(entries[0]);
  
      if (!entries[0].isIntersecting) {
        return;
      }
  
      entries[0].target.classList.add('appear');
    }
  
      const options = {
        threshold: 0.2,
      };
    
      const observer = new IntersectionObserver(callback, options);
    
      observer.observe(target);
  });
}
