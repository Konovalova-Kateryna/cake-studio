// let slideIndex = 1;
// showSlides(slideIndex);

// function plusSlides(n) {
//   slideIndex += n;
//   showSlides(slideIndex);
// }

// function currentSlide(n) {
//   slideIndex = n;
//   showSlides(slideIndex);
// }

// function showSlides(n) {
//   const slides = document.getElementsByClassName('mySlides');
//   if (n > slides.length) {
//     slideIndex = 1;
//   }
//   if (n < 1) {
//     slideIndex = slides.length;
//   }
//   for (let i = 0; i < slides.length; i++) {
//     slides[i].style.display = 'none';
//   }
//   slides[slideIndex - 1].style.display = 'grid';
// }

document.addEventListener('DOMContentLoaded', () => {
  ItcSlider.getOrCreateInstance('.itc-slider', {
    loop: true,
    swipe: true,
    refresh: true,
    autoplay: true,
    interval: 6000,
  });
});

// const sliderElem = document.querySelector('.itc-slider');
// const slider = ItcSlider.getInstance(sliderElem);
// slider.prev();
// slider.next();
// slider.reset();
