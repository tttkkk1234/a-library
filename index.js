const searchInput = document.getElementById('search');
if (searchInput) {
    const books = document.querySelectorAll('.book');

    searchInput.addEventListener('input', () => {
        const query = searchInput.value.toLowerCase();
        books.forEach(book => {
            const titleElement = book.querySelector('h3');
            if (titleElement) {
                const title = titleElement.textContent.toLowerCase();
                book.style.display = title.includes(query) ? 'block' : 'none';
            }
        });
    });
}
function showTime() {
    const timeElement = document.getElementById('time');
    if (timeElement) {
        timeElement.innerHTML = new Date().toUTCString();
    }
}

showTime();
setInterval(showTime, 1000);
document.addEventListener("DOMContentLoaded", () => {
    const hoverBox = document.getElementById("hoverBox");
    const infoBox = document.getElementById("infoBox");
  
    // Add event listener for mouseover (hover effect)
    hoverBox.addEventListener("mouseover", () => {
      infoBox.textContent = "You are now hovering over the box!";
    });
  
    // Add event listener for mouseout
    hoverBox.addEventListener("mouseout", () => {
      infoBox.textContent = "This is the initial information.";
    });
  });