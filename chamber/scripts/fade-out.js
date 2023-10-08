var hero = document.getElementById('hero');

function fadeOutOnScroll(element) {
  if (!element) {
    return;
  }
  
  var distanceToTop = window.scrollY + element.getBoundingClientRect().top;
  var elementHeight = element.offsetHeight;
  var scrollTop = document.documentElement.scrollTop;
  
  var opacity = 1;
  
  if (scrollTop > distanceToTop) {
    opacity = 1 - (scrollTop - distanceToTop) / elementHeight;
  }
  
  if (opacity >= 0) {
    element.style.opacity = opacity;
  }
}

function scrollHandler() {
  fadeOutOnScroll(hero);
}

window.addEventListener('scroll', scrollHandler);