const searchInput = document.getElementById('search');
        const books = document.querySelectorAll('.book');

        searchInput.addEventListener('input', () => {
            const query = searchInput.value.toLowerCase();
            books.forEach(book => {
                const title = book.querySelector('h3').textContent.toLowerCase();
                book.style.display = title.includes(query) ? 'block' : 'none';
            });
        });

        function toggleDetails(book) {
            const details = book.querySelector('.book-details');
            details.style.display = details.style.display === 'block' ? 'none' : 'block';
        }