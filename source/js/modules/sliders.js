export const initSlider = (slider) => {
  const introSlider = new window.Swiper(slider, {
    initialSLide: 1,
    slidesPerView: 1,
    pagination: {
      el: document.querySelector('[data-pagination="intro"]'),
      type: 'bullets',
      clickable: true,
    },
  });

  return introSlider;
};

