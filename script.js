const mobile_menu_toggle = document.getElementsByClassName('mobile-menu-toggle')[0];
const mobile_menu = document.getElementsByClassName('mobile-menu')[0];



function toggleMobileMenu(click) {
    mobile_menu.classList.toggle('mobile-menu-visible');
}

mobile_menu_toggle.addEventListener('click', toggleMobileMenu);