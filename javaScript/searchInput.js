const searchIcon = document.getElementById("searchIcon");
const searchInput = document.getElementById("searchInput");

searchIcon.addEventListener("click", () => {
  searchInput.classList.toggle("hidden");
  searchInput.focus(); 
});
