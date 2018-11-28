import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import { withRouter } from 'react-router'
class ListCategories extends Component {


render() {
    const {categories} = this.props
    return (
      <div className='list-categories'>
        <header className='subheader'>
          <h1>Categories</h1>
        </header>
        <div className='categories'>
          <ul>
            <li key='all'><Link to="/"><h3 className='subheader'>All posts</h3></Link></li>
            {Array.isArray(categories) && categories.map(
              category =>
              (<li key={category.name}><Link to={`/${category.path}`} ><h3 className='subheader'>{category.name}</h3></Link></li>)
              )
            }
          </ul>
        </div>
      </div>
    );
  }
}

function mapStateToProps (state){
  return {
    categories : state.categories
  }
}

export default withRouter(connect (mapStateToProps) (ListCategories));
