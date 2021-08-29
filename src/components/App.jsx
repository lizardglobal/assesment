import React, { useEffect, useState } from 'react';
import Books from './Books';
import Pagination from './Pagination';

function App() {
  const [books, setBooks] = useState([]);
  // pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [booksPerPage] = useState(4);

  // change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  useEffect(() => {
    fetch('/api/posts')
    .then((res) => res.json())
    .then((json) => setBooks(json.posts))
    .catch((err) => console.log(err))
  }, []);

  // get current books
  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;
  const currentBooks = books.slice(indexOfFirstBook, indexOfLastBook);

  return (
    <div className="mainContainer container">
      <div className="row">
        <h3>Books</h3>
        <Books books={currentBooks} />
        <Pagination booksPerPage={booksPerPage} totalBooks={books.length} paginate={paginate} />
      </div>
    </div>
  )
}

export default App;
