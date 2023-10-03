export const initSlider = () => {
  const slider = document.querySelector('[data-slider]');
  const introSlider = new window.Swiper(slider, {
    loop: true,
    initialSLide: 3,
    slidesPerView: 1,
    pagination: {
      el: document.querySelector('[data-pagination="intro"]'),
      type: 'bullets',
      clickable: true,
    },
  });

  return introSlider;
};

export const initSliderPrograms = () => {
  const sliderPrograms = document.querySelector('[data-slider="programs"]');
  const programsSlider = new window.Swiper(sliderPrograms, {
    initialSLide: 1,
    slidesPerView: 3,
    spaceBetween: 32,
    scrollbar: {
      el: document.querySelector('[data-scrollbar="programs"]'),
      draggable: true,
      dragClass: 'drag-scroll',
    },
  });

  return programsSlider;
};

