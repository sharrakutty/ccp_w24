const gallery = document.querySelector('.gallery');
const images = gallery.querySelectorAll('img');
let currentIndex = 0;

function showNextImage() {
    images[currentIndex].style.opacity = 0;
    currentIndex = (currentIndex + 1) % images.length;
    images[currentIndex].style.opacity = 1;
}

setInterval(showNextImage, 5000);

const searchBox = document.getElementById('search-box');
const resultsDiv = document.getElementById('results');

// Add event listener to hide the results div when the user clicks outside the search box
document.addEventListener('click', (event) => {
  if (!event.target.matches('#search-box')) {
    resultsDiv.style.display = 'none';
  }
});

// Add event listener to trigger a search when the user presses Enter in the search box
searchBox.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    event.preventDefault();
    const searchTerm = searchBox.value.trim();
    if (searchTerm) {
      // Add code here to search for the term on your website
      console.log(`Searching for "${searchTerm}"...`);
      resultsDiv.innerHTML = `<p>Search results for "${searchTerm}":</p>
                               <ul id="search-results"></ul>`;
      // Add code here to fetch and display search results
    } else {
      resultsDiv.innerHTML = '';
    }
    resultsDiv.style.display = 'block';
  }
});