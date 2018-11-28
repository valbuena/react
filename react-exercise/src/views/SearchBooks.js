import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Book from '../elements/Book.js'
import {Link} from 'react-router-dom'

export default class SearchBooks extends Component {

  static propTypes = {
    options: PropTypes.array.isRequired,
    books: PropTypes.array.isRequired,
    onMoveBook: PropTypes.func.isRequired,
    onSearchBooks: PropTypes.func.isRequired
  }

  state ={
    query : ''
  }

  clearQuery = () => {
    this.setState({query: ''})
  }

  updateQuery = (query) => {
    event.preventDefault()
    this.props.onSearchBooks(query)
    if (!query)
      this.clearQuery()
  }


  render(){

    const {options, books, onMoveBook}=this.props;

    return(
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to='/'>Close</Link>
          <div className="search-books-input-wrapper">
            <input type="text" placeholder="Search by title or author" onChange={(event) => this.updateQuery(event.target.value)}/>
          </div>
        </div>
        { books && books.length > 0 && (
          <div className="search-books-results">
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
        )}
      </div>
    )
  }
}
