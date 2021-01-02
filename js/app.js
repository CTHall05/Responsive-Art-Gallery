baguetteBox.run(".gallery-container");

// Search Bar Functionality //

const searchBar = document.getElementById("paintingSearchBar");
let gallery = document.querySelectorAll(".gallery-container a");
searchBar.addEventListener("keyup", (e) => {
  const searchTerm = e.target.value.toLowerCase();
  // console.log(searchBox.value);
  for (let i = 0; i < gallery.length; i++) {
    const searchInput = gallery[i].getAttribute("data-caption");
    if (searchInput.toLowerCase().includes(searchTerm)) {
      gallery[i].parentNode.style.display = "";
    } else {
      gallery[i].parentNode.style.display = "none";
    }
  }
});
// -------- //
