export const initNav = () => {
  const navElement = document.querySelector('.page-header__nav');
  if (!navElement) {
    return;
  }

  const mediaQuery = window.matchMedia('(max-width: 765px)');

  const listMenuElement = navElement.querySelector('.list-menu');
  const togglerElement = navElement.querySelector('.button-container--toggle');
  const headerLinkElement = navElement.querySelector('.page-header__link');

  const changeOverlay = (method = 'toggle') => {
    document.body.classList[method]('scroll-lock');
    listMenuElement.classList[method]('list-menu--opened');
    togglerElement.classList[method]('button-container--opened');

    if (mediaQuery.matches) {
      headerLinkElement.classList[method]('page-header__link--hidden');
    }
  };

  togglerElement.addEventListener('click', () => changeOverlay());
};
