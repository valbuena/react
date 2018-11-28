import React, { Component } from 'react';
import ListCategories from '../components/ListCategories'
import DetailPost from '../components/DetailPost'

class DetailPostPage extends Component {
  render() {
    return (
      <div className = 'container'>
        <header className = 'header'>
          <h1>Readable</h1>
        </header>
        <div className ='mainpage'>
          <ListCategories/>
          <DetailPost/>
        </div>
      </div>
    );
  }
}

export default DetailPostPage;
