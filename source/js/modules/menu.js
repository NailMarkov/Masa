export const initNav = () => {
  const navElement = document.querySelector('.page-header__nav');
  if (!navElement) {
    return;
  }

  const listMenuElement = navElement.querySelector('.list-menu');
  const togglerElement = navElement.querySelector('.button-container--toggle');
  const headerLinkElement = navElement.querySelector('.page-header__link');

  const changeOverlay = (method = 'toggle') => {
    document.body.classList[method]('scroll-lock');
    listMenuElement.classList[method]('list-menu--opened');
    headerLinkElement.classList[method]('page-header__link--hidden');
    togglerElement.classList[method]('button-container--opened');
  };

  togglerElement.addEventListener('click', () => changeOverlay());
};
