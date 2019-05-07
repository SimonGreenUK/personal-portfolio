const mobile_menu_toggle = document.getElementsByClassName('mobile-menu-toggle')[0];
const mobile_menu_links = document.getElementsByClassName('mobile-menu-link');
const mobile_menu = document.getElementsByClassName('mobile-menu')[0];

// CLICK HAMBURGER TO SHOW MOBILE MENU
function toggleMobileMenu(click) {
    mobile_menu.classList.toggle('mobile-menu-visible');
}

mobile_menu_toggle.addEventListener('click', toggleMobileMenu);

// MOBILE MENU CLOSES WHEN MOBILE MENU LINK CLICKED
function mobileMenuLinks() {
    console.log(mobile_menu_links);
}

mobileMenuLinks();



