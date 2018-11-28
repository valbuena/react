import React, { Component } from 'react';
import ListCategories from '../components/ListCategories'
import ListPosts from '../components/ListPosts'

class MainPage extends Component {
  render() {
    return (
      <div className = 'container'>
        <header className = 'header'>
          <h1>Readable</h1>
        </header>
        <div className ='mainpage'>
          <ListCategories/>
          <ListPosts/>
        </div>
      </div>
    );
  }
}

export default MainPage;
