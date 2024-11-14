document.addEventListener('DOMContentLoaded', () => {
  const scrollingBanner = document.querySelector('.scrolling_banner');
  const images = scrollingBanner.querySelectorAll('img');
  let currentIndex = 0;
  let scrollInterval;

  function scrollRight() {
    currentIndex++;
    if (currentIndex >= images.length) {
      currentIndex = 0;
    }
    scrollingBanner.style.transform = `translateX(${-currentIndex * 100}%)`;
  }

  function scrollLeft() {
    currentIndex--;
    if (currentIndex < 0) {
      currentIndex = images.length - 1;
    }
    scrollingBanner.style.transform = `translateX(${-currentIndex * 100}%)`;
  }

  scrollInterval = setInterval(scrollRight, 5000);

  // Stop auto-scrolling on hover
  scrollingBanner.addEventListener('mouseover', () => {
    clearInterval(scrollInterval);
  });

  scrollingBanner.addEventListener('mouseout', () => {
    scrollInterval = setInterval(scrollRight, 5000);
  });

  // Manual scrolling
  document.querySelector('.scroll-left').addEventListener('click', scrollLeft);
  document.querySelector('.scroll-right').addEventListener('click', scrollRight);
});
