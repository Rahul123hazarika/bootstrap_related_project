const track = document.querySelector('.circle-track');
const items = document.querySelectorAll('.circle-item');

let activeIndex = [...items].findIndex(i =>
  i.classList.contains('active')
);

function updateCarousel() {
  const activeItem = items[activeIndex];

  // remove active from all
  items.forEach(i => i.classList.remove('active'));
  activeItem.classList.add('active');

  // center calculation
  const trackRect = track.getBoundingClientRect();
  const itemRect = activeItem.getBoundingClientRect();

  const trackCenter = trackRect.left + trackRect.width / 2;
  const itemCenter = itemRect.left + itemRect.width / 2;

  const moveX = trackCenter - itemCenter;

  track.style.transform = `translateX(${moveX}px)`;
}

items.forEach((item, index) => {
  item.addEventListener('click', () => {
    activeIndex = index;
    updateCarousel();
  });
});

// initial centering on load
window.addEventListener('load', updateCarousel);
