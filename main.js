const scrollWrapper = document.querySelector('.scroll-wrapper');
const scrollContent = document.querySelector('.scroll-content');
let isScrolling;
scrollWrapper.addEventListener('scroll', function() {
  clearTimeout(isScrolling);
  isScrolling = setTimeout(function() {
    scrollContent.style.transition = 'transform 0.5s ease-in-out';
  }, 100);
  scrollContent.style.transition = 'none';
  scrollContent.style.transform = `translateX(${-scrollWrapper.scrollLeft}px)`;
});


