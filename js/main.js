'use strict';

{
  const menu = document.getElementById('menu');
  const open = document.querySelector('.menu-open');
  const close = document.getElementById('close');
  const main = document.querySelector('main');

  function menuOpen () {
    open.classList.add('hide-figure');
    menu.classList.add('show');
  };

  function menuClose () {
    open.classList.remove('hide-figure');
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
