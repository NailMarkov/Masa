export const initChangeBlock = (wrapper) => {
  const linkElement = wrapper.querySelector('.link');
  const divElement = document.createElement('div');
  const buttonElement = document.createElement('a');
  buttonElement.textContent = 'подробнее';
  divElement.classList.add('block-wrapper__last');
  buttonElement.classList.add('link');

  const createBlock = (element) => {
    divElement.appendChild(buttonElement);
    element.appendChild(divElement);
  };

  const getMobileChange = (event) => {
    if (event.matches) {
      linkElement.classList.add('hidden');
      createBlock(wrapper);
    } else {
      linkElement.classList.remove('hidden');
      divElement.remove();
      buttonElement.remove();
    }
  };

  const mediaQuery = window.matchMedia('(max-width: 765px)');
  mediaQuery.addEventListener('change', getMobileChange);

  getMobileChange(mediaQuery);
};

document.querySelectorAll('.block-wrapper').forEach(initChangeBlock);
