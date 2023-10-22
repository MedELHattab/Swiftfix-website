const toggleButton = document.querySelector('.toggle');
const menuItems = document.querySelectorAll('.nav-item');

// Add a click event listener to the toggle button
toggleButton.addEventListener('click', () => {
    // Toggle the "active" class on each menu item
    menuItems.forEach(item => {
        item.classList.toggle('active');
    });
});