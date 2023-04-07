let search = document.querySelector('.search-form');
document.querySelector('#search-btn'). onclick = () => {
  search.classList.toggle('active');
  shopping.classList.remove('active');
  login.classList.remove('active');
  navbar.classList.remove('active');
}

let shopping = document.querySelector('.shopping-cart');
document.querySelector('#cart-btn'). onclick = () => {
  shopping.classList.toggle('active');
  search.classList.remove('active');
  login.classList.remove('active');
  navbar.classList.remove('active');
}

let login = document.querySelector('.login-form');
document.querySelector('#login-btn'). onclick = () => {
  login.classList.toggle('active');
  search.classList.remove('active');
 shopping.classList.remove('active');
 navbar.classList.remove('active');
}

let navbar = document.querySelector('.navbar');
document.querySelector('#menu-btn'). onclick = () => {
  navbar.classList.toggle('active');
  search.classList.remove('active');
 shopping.classList.remove('active');
 login.classList.remove('active');
}

window.scroll = () => {
 search.classList.remove('active');
 shopping.classList.remove('active');
 login.classList.remove('active');
 navbar.classList.remove('active');
}

const swiper = new Swiper('.swiper', {
  // Default parameters
  loop:true,
  spaceBetween: 20,
  autoplay: {
   delay: 7500,
   disableOnInteraction: false,
  },
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 0px
    0: {
      slidesPerView: 1,
    },
    // when window width is >= 768px
    768: {
      slidesPerView: 2,
    },
    // when window width is >= 1020px
    1020: {
      slidesPerView: 3,
    }
  }
})