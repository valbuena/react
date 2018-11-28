import React, {Component} from 'react'
import PropTypes from 'prop-types'

export default class Book extends Component {

  static propTypes = {
    book: PropTypes.object.isRequired,
    options: PropTypes.array.isRequired,
    onMoveBook: PropTypes.func.isRequired   
  }

  moveBook = (newValue) => {
    if (this.props.onMoveBook){
      this.props.onMoveBook(this.props.book, newValue)
    }
  }

  render(){

    const {book, options}=this.props;

      return (
            <div className="book">
              <div className="book-top">
              {book.imageLinks && book.imageLinks.thumbnail &&
                <div className="book-cover" style={{ width: 128, height: 192, backgroundImage:`url(${book.imageLinks.thumbnail})`}}></div>
              }
                <div className="book-shelf-changer">
                  <select value={book.shelf? book.shelf: 'none'}   onChange={(event) => this.moveBook(event.target.value)}>
                    <option value="move" disabled>Move to...</option>
                    {options.map(option => <option key={option.value} value={option.value}>{option.title}</option>)}
                    <option value="none">None</option>
                  </select>
                </div>
              </div>
              <div className="book-title">{book.title ? book.title : ''}</div>
              <div className="book-authors">{book.authors ? book.authors.toString() : ''}</div>
            </div>
      )
  }
}
