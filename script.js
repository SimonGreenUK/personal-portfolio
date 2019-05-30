const mobile_menu_icon = document.getElementsByClassName('mobile-menu-icon')[0];
const mobile_menu_icon_bars = document.querySelectorAll('.mobile-menu-icon-bars');
const mobile_menu_links = document.querySelectorAll('.mobile-menu-link');
const mobile_menu = document.getElementsByClassName('mobile-menu')[0];
const welcome_section_content_icons = document.getElementsByClassName('welcome-section-content-icons')[0];
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

// HELPER FUNCTION - CHECKS IF PASSED IN ELEMENT IS IN VIEWPORT & RETURNS BOOLEAN
let isInViewport = function (elem) {
  let bounding = elem.getBoundingClientRect();
  return (
      bounding.top >= 0 &&
      bounding.left >= 0 &&
      bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

// HIDE NAV TITLE WHEN WELCOME SECTION ICONS IN VIEWPORT
window.addEventListener('scroll', function (event) {
  if (isInViewport(welcome_section_content_icons)) {
    nav_title.classList.add('nav-title--hidden');
    nav_title.classList.remove('nav-title--visible');
  } else {
      nav_title.classList.remove('nav-title--hidden');
      nav_title.classList.add('nav-title--visible');  
    }
});