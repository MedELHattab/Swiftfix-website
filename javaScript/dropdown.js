
const serviceLink = document.querySelector('.service-icon .nav-link');
const dropdownMenu = document.querySelector('.dropdown-menu');

let isDropdownVisible = false;
function toggleDropdown() {
    if (isDropdownVisible) {
        dropdownMenu.style.display = 'none'; 
    } else {
        dropdownMenu.style.display = 'block'; 
    }
    isDropdownVisible = !isDropdownVisible; 
}

serviceLink.addEventListener('click', toggleDropdown);

