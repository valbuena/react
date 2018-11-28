import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import MainPage from './views/MainPage';
import DetailPostPage from './views/DetailPostPage';
import  {fetchPosts} from './actions/posts'
import  {fetchCategories} from './actions/categories'
import {connect} from 'react-redux'
import { withRouter } from 'react-router'


class App extends Component {

  componentDidMount() {
    this.props.loadPosts();
    this.props.loadCategories();
  }


  render() {
    return (
      <div className="app">
        <Route exact path='/' component={MainPage}/>
        <Route exact path='/:category' component={MainPage}/>
        <Route exact path='/:category/:postId' component={DetailPostPage}/>
      </div>
    );
  }
}

const mapStateToProps = state => ({ ...state });

function mapDispatchToProps (dispatch){
  return {
    loadPosts : () => dispatch(fetchPosts()),
    loadCategories : () => dispatch(fetchCategories())
  }
}




export default withRouter (connect(mapStateToProps, mapDispatchToProps)(App))
