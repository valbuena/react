import React, { Component } from 'react'
import {connect} from 'react-redux'
import { withRouter } from 'react-router'
import SummaryPost from './SummaryPost'
import Add from 'react-icons/lib/ti/document-add'
import sortBy from 'sort-by'
import FormPost from './FormPost'

class ListPosts extends Component {

  state = {
    filter : '',
    addPostOpen : false
  }


  handleSortBy(event){
    event.preventDefault()
    this.setState({filter:event.target.value})
    if (event.target.value === ''){
      this.props.loadPosts()
    }
  }

  openAddPost= () => this.setState(() => ({ addPostOpen: true }))

  closeAddPost= () => this.setState(() => ({ addPostOpen: false }))

  render () {
    const {posts} = this.props

    if (this.state.filter === 'SCORE'){
      posts.sort(sortBy('-voteScore'))
    }
    if (this.state.filter === 'TIME'){
      posts.sort(sortBy('-timestamp'))
    }

    return (
      <div className='list-posts'>

        <FormPost isOpen={this.state.addPostOpen} close={this.closeAddPost}/>

        <header className='subheader'>
          <h1>Posts</h1>
        </header>
        <div className='list-posts-menu'>
          <select value={this.state.filter} onChange={this.handleSortBy.bind(this)} className='subheader'>
            <option value="">Without order</option>
            <option value="SCORE">By Score</option>
            <option value="TIME">By Time</option>
          </select>

          <button onClick={() => this.openAddPost()}>
              <Add size={35}/> Add Post
          </button>
        </div>
        <div>
          <ul>
            {Array.isArray(posts) && posts.map(
              post =>
              (<li key={post.id} >
                <SummaryPost post={post}/>
              </li>)
              )
            }
          </ul>
        </div>

      </div>
    );
  }
}

function loaderPosts(posts, ownProps){
  if ('category' in ownProps.match.params){
    const category = ownProps.match.params.category
    return posts.filter(post => (post.category === category))
  }
  else return posts
}

function mapStateToProps(state, ownProps) {
  return {
    posts: loaderPosts(state.posts, ownProps)
  }
}


export default withRouter(connect (mapStateToProps) (ListPosts));
