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

