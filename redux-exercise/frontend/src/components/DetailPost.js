import React, { Component } from 'react';
import {connect} from 'react-redux'
import { withRouter } from 'react-router'
import MenuPost from './MenuPost'
import ListComments from './ListComments'


class DetailPost extends Component {

  render(){

    const {post} = this.props
    return (
      <div className='detail-post'>
        {(post !== '') &&
          <div>
            <header className='subheader'>
              <h1>{post.title}</h1>
            </header>
            <h2>Author : {post.author}</h2>
            <p><b>Category</b> : {post.category}</p>
            <p><b>Body</b> :{post.body}</p>
            <p><b>Date</b> :{new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'}).format(post.timestamp)}</p>
            <p><b>Number of comments</b>: {post.commentCount}</p>
            <p><b>Score</b>: {post.voteScore}</p>
            <MenuPost post={post}/>
            <ListComments/>
          </div>
        }
      </div>
    )
  }

}

function loaderPost(posts, params){
  if (Array.isArray(posts)){
      return posts.filter(post => (post.id === params.postId))[0];
  }
  else return ''
}

function mapStateToProps(state, ownProps) {
  return {
    post: loaderPost(state.posts, ownProps.match.params)
  }
}



export default withRouter(connect (mapStateToProps) (DetailPost));
