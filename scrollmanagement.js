const body = document.body;
const customScrollbar = document.createElement('div');
const customThumb = document.createElement('div');

customScrollbar.classList.add('custom-scrollbar');
customThumb.classList.add('custom-thumb');
customScrollbar.appendChild(customThumb);
document.body.appendChild(customScrollbar);

function updateScrollbar() {
  const viewportHeight = window.innerHeight;
  const contentHeight = body.scrollHeight;
  const thumbHeight = (viewportHeight / contentHeight) * viewportHeight;

  customThumb.style.height = `${thumbHeight}px`;
  updateThumbPosition();
}

function updateThumbPosition() {
  const scrollRatio = window.scrollY / (body.scrollHeight - window.innerHeight);
  const thumbPosition = scrollRatio * (window.innerHeight - customThumb.offsetHeight);

  customThumb.style.top = `${thumbPosition}px`;
}

window.addEventListener('scroll', updateThumbPosition);
window.addEventListener('load', updateScrollbar);
window.addEventListener('resize', updateScrollbar);

customThumb.addEventListener('mousedown', (e) => {
  e.preventDefault();
  
  const startY = e.clientY;
  const startScrollTop = window.scrollY;

  function onMouseMove(e) {
    const deltaY = e.clientY - startY;
    const scrollAmount = (deltaY / customScrollbar.clientHeight) * body.scrollHeight;

    window.scrollTo(0, startScrollTop + scrollAmount);
  }

  function onMouseUp() {
    document.removeEventListener('mousemove', onMouseMove);
    document.removeEventListener('mouseup', onMouseUp);
  }

  document.addEventListener('mousemove', onMouseMove);
  document.addEventListener('mouseup', onMouseUp);
});

customThumb.addEventListener('touchstart', (e) => {
  e.preventDefault();
  
  const touch = e.touches[0];
  const startY = touch.clientY;
  const startScrollTop = window.scrollY;

  function onTouchMove(e) {
    const touch = e.touches[0];
    const deltaY = touch.clientY - startY;
    const scrollAmount = (deltaY / customScrollbar.clientHeight) * body.scrollHeight;

    window.scrollTo(0, startScrollTop + scrollAmount);
  }

  function onTouchEnd() {
    document.removeEventListener('touchmove', onTouchMove);
    document.removeEventListener('touchend', onTouchEnd);
  }

  document.addEventListener('touchmove', onTouchMove);
  document.addEventListener('touchend', onTouchEnd);
});

let isScrolling = false;
let accumulatedDeltaY = 0;





document.addEventListener('wheel', (e) => {
  e.preventDefault();
  accumulatedDeltaY += e.deltaY;

  if (!isScrolling) {
    isScrolling = true;

    const scroll = () => {
      if (Math.abs(accumulatedDeltaY) > 1) {
        const scrollAmount = accumulatedDeltaY * 4;
        window.scrollBy({
          top: scrollAmount,
          behavior: 'smooth',
        });

        accumulatedDeltaY *= 0.8;
        requestAnimationFrame(scroll);
      } else {
        accumulatedDeltaY = 0;
        isScrolling = false;
      }
    };

    scroll();
  }
}, { passive: false });
