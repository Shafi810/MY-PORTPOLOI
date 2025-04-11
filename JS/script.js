var swiper = new Swiper(".mySwiper", {
    
  spaceBetween: 30,
  loop: true,
  navigation: {
    nextEl: ".prev",
    prevEl: ".next",
  },
   breakpoints:{
     '480' : {
      slidesPerView: 1,
     },
     '768' : {
      slidesPerView: 2,
     },
     '993' : {
      slidesPerView: 3,
   }
   }
});
const animateOnScroll = () => {
  const animatedCards = document.querySelectorAll('.animate');

  animatedCards.forEach((card) => {
    const cardPosition = card.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (cardPosition < windowHeight - 100) {
      card.classList.add('active');
    } else {
      card.classList.remove('active'); // Optional: Remove class if it scrolls out of view
    }
  });
};

// Run function on page load and scroll
window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);