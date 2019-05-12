const mobile_menu_icon = document.getElementsByClassName('mobile-menu-icon')[0];
const mobile_menu_icon_bars = document.querySelectorAll('.mobile-menu-icon-bars');
const mobile_menu_links = document.querySelectorAll('.mobile-menu-link');
const mobile_menu = document.getElementsByClassName('mobile-menu')[0];

// ANIMATE HAMBURGER ON CLICK 
function animateHamburger(click) {
    mobile_menu_icon.classList.toggle('change');
}

mobile_menu_icon.addEventListener('click', animateHamburger);


// SHOW MOBILE MENU ON HAMBURGER OR MOBILE MENU LINK CLICK
function toggleOpenMobileMenu(click) {
    mobile_menu.classList.toggle('mobile-menu-visible');
}

mobile_menu_icon.addEventListener('click', toggleOpenMobileMenu);

mobile_menu_links.forEach(link => link.addEventListener('click', toggleOpenMobileMenu));
