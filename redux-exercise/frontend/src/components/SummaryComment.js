import React, { Component } from 'react';
import MenuComment from './MenuComment'

class SummaryComment extends Component {

  render(){
    const {comment} = this.props
    return (
      <div className = 'summary'>
        <div className = 'summary-description'>
          <h2>{comment.body}</h2>
          <div className = 'summary-subheader'>
            <h3>by</h3><h4>{comment.author}</h4>
          </div>
          <div>
            <p>Score: {comment.voteScore}</p>
          </div>
        </div>
        <MenuComment comment={comment}/>
      </div>
    );
  }

}

export default SummaryComment;
