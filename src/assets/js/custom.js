document.addEventListener('DOMContentLoaded', function () {
    // Add animation for the first slide on page load
    const firstSlideText = document.querySelector('.slick-active .slide__body');
    if (firstSlideText) {
      firstSlideText.classList.add('animate');
    }
  
    // Function to handle slider change
    function onSliderChange() {
      // Remove animation class from all slides
      document.querySelectorAll('.slide__body').forEach((el) => {
        el.classList.remove('animate');
      });
  
      // Add animation class to the current active slide
      const currentSlideText = document.querySelector('.slick-active .slide__body');
      if (currentSlideText) {
        currentSlideText.classList.add('animate');
      }
    }
  
    // Attach event listener for slider change using native JavaScript
    const slickCarousel = document.querySelector('.slick-carousel');
    if (slickCarousel) {
      slickCarousel.addEventListener('afterChange', onSliderChange);
    }
  });


  
  