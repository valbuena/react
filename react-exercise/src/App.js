import React, {Component} from 'react'
import { Route } from 'react-router-dom'
import ListBooks from './views/ListBooks.js'
import SearchBooks from './views/SearchBooks.js'
import * as BooksAPI from './BooksAPI'
import './App.css'

export default class BooksApp extends Component {
  state = {
    books : [],
    searchBooks : []
  }

  //Get my books
  componentDidMount (){
    BooksAPI.getAll().then((books) =>{
      this.setState({books})
    })
  }

  //Update o add books to list
  updateOrAddBooks = (books, movedBook, onlyUpdate) => {
    const index = books.findIndex(book => book.id === movedBook.id)
    if (index !== -1){
      const book = books[index]
      book.shelf = movedBook.shelf
      books[index] = book
    } else if (!onlyUpdate) {
      books.push(movedBook)
    }
    return books
  }

 //move book another shelf
  moveBook = (book, shelf) => {
    BooksAPI.update(book, shelf)
    book.shelf = shelf
    this.setState ((state) => ({
      books : this.updateOrAddBooks(state.books, book, false),
      searchBooks : this.updateOrAddBooks(state.searchBooks, book, true)
    }))
  }

  //Update every book in the search books with its shelf value
  configureBook = (searchBook, books) =>{
    const book = books.find(book => book.id === searchBook.id)
    if (typeof book !== 'undefined')
      searchBook.shelf = book.shelf
    return  searchBook
  }

  //synchronize the books of the shelves with the books of the search
  configureBooks = (searchBooks, books) => {
    if (searchBooks instanceof Array){
      return searchBooks.map(searchBook =>
        this.configureBook(searchBook, books)
      )
    }
    return []
  }

  //Search books
  searchBooks = (query) => {
    if (query){
      BooksAPI.search(query)
      .then(searchBooks => this.setState((state) => ({
        searchBooks: this.configureBooks(searchBooks, state.books)
      })))
      .catch(error => console.log(error, 'error'))
    } else {
      this.setState({searchBooks:[]})
    }

  }

  render() {

    //Declare in one place to use the sames values in several places
    const options = [ {title:'Currently Reading' , value : "currentlyReading"},
                    {title:'Want to Read' , value : "wantToRead"},
                    {title:'Read' , value : "read"}]

    return (
      <div className="app">
        <Route exact path='/' render={() => (
          <ListBooks
              options={options}
              books={this.state.books}
              onMoveBook={this.moveBook}/>
        )}/>
        <Route exact path='/search' render={() => (
          <SearchBooks
            options={options}
            books={this.state.searchBooks}
            onMoveBook={this.moveBook}
            onSearchBooks={this.searchBooks}/>
        )}/>
      </div>
    )
  }
}
