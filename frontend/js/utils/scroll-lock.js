let timer;

export const lockScroll = () => {
  clearTimeout(timer);
  const menuEl = document.querySelector('.menu');
  if (window.innerWidth > document.body.clientWidth) {
    document.body.style.paddingRight = `${
      window.innerWidth - document.body.clientWidth
    }px`;

    // Устранение дерганья фиксированного меню
    if (menuEl) {
      menuEl.style.paddingRight = `${
        window.innerWidth - document.body.clientWidth
      }px`;
    }
  }
  document.body.classList.add('hidden-content');
};

export const unlockScroll = () => {
  timer = setTimeout(() => {
    const menuEl = document.querySelector('.menu');
    document.body.classList.remove('hidden-content');
    document.body.style.paddingRight = '0px';

    // Устранение дерганья фиксированного меню
    if (menuEl) {
      menuEl.style.paddingRight = '0px';
    }
  }, 500);
};
