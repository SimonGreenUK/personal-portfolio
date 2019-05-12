const mobile_menu_icon = document.getElementsByClassName('mobile-menu-icon')[0];
const mobile_menu_icon_bars = document.querySelectorAll('.mobile-menu-icon-bars');
const mobile_menu_links = document.querySelectorAll('.mobile-menu-link');
const mobile_menu = document.getElementsByClassName('mobile-menu')[0];
const nav_title = document.getElementsByClassName('nav-title')[0];

// ANIMATE HAMBURGER ON CLICK 
function animateHamburger(click) {
    mobile_menu_icon.classList.toggle('change');
}

// SHOW MOBILE MENU ON HAMBURGER OR MOBILE MENU LINK CLICK
function toggleOpenMobileMenu(click) {
    mobile_menu.classList.toggle('mobile-menu-visible');
}

mobile_menu_icon.addEventListener('click', toggleOpenMobileMenu);

mobile_menu_icon.addEventListener('click', animateHamburger);

mobile_menu_links.forEach(link => link.addEventListener('click', toggleOpenMobileMenu));

mobile_menu_links.forEach(link => link.addEventListener('click', animateHamburger));

// SHOW MENU TITLE WHEN NOT ON WELCOME SECTION
let scrollPos = 0;

function checkPosition() {
    
  let windowY = window.scrollY;
  console.log(windowY);
  if (windowY > 505) {
    nav_title.classList.remove('nav-title--hidden');
    nav_title.classList.add('nav-title--visible');
  } else {
    nav_title.classList.add('nav-title--hidden');
    nav_title.classList.remove('nav-title--visible');
  }
  scrollPos = windowY;
}

window.addEventListener('scroll', checkPosition);