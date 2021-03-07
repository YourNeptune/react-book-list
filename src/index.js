import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import books from './books'
import Book from './Book'


const BookList = () => {
  return (
    <div className='booklist'>
      {books.map((book) => (
        <Book key={book.id} {...book}/>
      ))}
    </div>

  )
}


ReactDOM.render(
  <BookList />,
  document.getElementById('root')
);

