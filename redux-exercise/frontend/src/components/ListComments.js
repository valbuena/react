import React, { Component } from 'react'
import {connect} from 'react-redux'
import { withRouter } from 'react-router'
import  {fetchCommentsByPost} from '../actions/comments'
import SummaryComment from './SummaryComment'
import Add from 'react-icons/lib/ti/document-add'
import FormComment from './FormComment'

class ListComments extends Component {

  state = {
    addCommentOpen : false
  }

  componentDidMount() {
    if ('postId' in this.props.match.params){
      this.props.loadCommentsByPost(this.props.match.params.postId)
    }
  }

  openAddComment= () => this.setState(() => ({ addCommentOpen: true }))

  closeAddComment= () => this.setState(() => ({ addCommentOpen: false }))

  render () {
    const {comments} = this.props
    return (
      <div className='list-comments'>

        <FormComment isOpen={this.state.addCommentOpen} close={this.closeAddComment}/>

        <div>
          <button onClick={() => this.openAddComment()}>
              <Add size={35}/> Add Comment
          </button>
        </div>
        <div>
          <ul>
            {Array.isArray(comments) && comments.map(
              comment =>
              (<li key={comment.id} >
                <SummaryComment comment={comment}/>
              </li>)
              )
            }
          </ul>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    comments: state.comments
  };
}

function mapDispatchToProps (dispatch){
  return {
    loadCommentsByPost : (id)  => dispatch(fetchCommentsByPost(id))
  }
}
export default withRouter(connect (mapStateToProps, mapDispatchToProps) (ListComments));
