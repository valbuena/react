import React from 'react'
import Book from './Book.js'

function Shelf (props) {

  const {options, books, title, onMoveBook}= props;

  return (
          <div className="bookshelf">
            <h2 className="bookshelf-title">{title}</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
                {books.map(bookItem =>
                  (<li key={bookItem.id}>
                   <Book book={bookItem}
                         options={options}
                         onMoveBook={onMoveBook}
                    />
                  </li>)
                )}
              </ol>
            </div>
          </div>
  )
}

export default Shelf
