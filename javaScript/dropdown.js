// Get references to the elements
const serviceLink = document.querySelector('.service-icon .nav-link');
const dropdownMenu = document.querySelector('.dropdown-menu');

// Initialize a variable to track the visibility state
let isDropdownVisible = true;

// Function to toggle the visibility of the dropdown menu
function toggleDropdown() {
    if (isDropdownVisible) {
        dropdownMenu.style.display = 'none'; // Hide the dropdown
    } else {
        dropdownMenu.style.display = 'block'; // Show the dropdown
    }
    isDropdownVisible = !isDropdownVisible; // Toggle the visibility state
}

serviceLink.addEventListener('click', toggleDropdown);

