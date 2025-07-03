function mobileTab() {
  let bars = document.getElementById("bars");
  let cancel = document.getElementById("cancel");
  let mobile_nav = document.getElementById("mobile_button");
  bars.style.display = "none";
  cancel.style.display = "initial";
  mobile_nav.style.display = "initial";
}

function mobileTabClose() {
  let bars = document.getElementById("bars");
  let cancel = document.getElementById("cancel");
  let mobile_nav = document.getElementById("mobile_button");
  bars.style.display = "initial";
  cancel.style.display = "none";
  mobile_nav.style.display = "none";
}

const carousel = document.getElementById('carousel');
const cards = document.querySelectorAll('.service-card');
const cardWidth = cards[0].offsetWidth + 20;
let index = 0;

function scrollCarousel() {
  index++;
  carousel.style.transition = 'transform 0.5s ease-in-out';
  carousel.style.transform = `translateX(-${index * cardWidth}px)`;

  if (index === cards.length - 3) {
    setTimeout(() => {
      carousel.style.transition = 'none';
      index = 0;
      carousel.style.transform = `translateX(0px)`;
    }, 400);
  }
}

setInterval(scrollCarousel, 1500);