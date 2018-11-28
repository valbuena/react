import React, { Component } from 'react';
import MenuPost from './MenuPost'



class SummaryPost extends Component {

  render(){
    const {post} = this.props
    return (
      <div className = 'summary'>
        <div className = 'summary-description'>
          <h2>{post.title}</h2>
          <div className = 'summary-subheader'>
            <h3>by</h3><h4>{post.author}</h4>
          </div>
          <div>
            <p>Comments:{post.commentCount}</p>
            <p>Score: {post.voteScore}</p>
          </div>
        </div>
        <MenuPost post={post}/>

      </div>
    );
  }

}

export default SummaryPost;
