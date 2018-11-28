import React from 'react'
import {Link} from 'react-router-dom'
import Shelf from '../elements/Shelf.js'

function ListBooks (props){

  const {options, books, onMoveBook} = props

  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">

        <div>
          {options.map(option =>
            (<Shelf key={option.value}
                    options={options}
                    title={option.title}
                    books={books.filter(book => book.shelf === option.value)}
                    onMoveBook={onMoveBook}
                    />
            )
          )}

        </div>
      </div>
      <div className="open-search">
       <Link to='/search'>Add a book</Link>
      </div>
    </div>
  )
}


export default ListBooks
