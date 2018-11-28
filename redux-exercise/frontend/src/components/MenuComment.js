import React, { Component } from 'react';
import {connect} from 'react-redux'
import { withRouter } from 'react-router'
import ThumbsOK from 'react-icons/lib/ti/thumbs-ok'
import ThumbsKO from 'react-icons/lib/ti/thumbs-down'
import Trash from 'react-icons/lib/ti/trash'
import Edit from 'react-icons/lib/ti/edit'
import FormComment from './FormComment'
import {addVoteComment, removeVoteComment, removeComment} from '../actions/comments'

class DetailComment extends Component {

  state = {
    editCommentOpen : false
  }

  clickAddVoteComment(id){
    this.props.addVote(id)
  }

  clickRemoveVoteComment(id){
    this.props.removeVote(id)
  }

  clickDeleteComment(id){
    this.props.removeComment(id)
  }

  openEditComment(){
    this.setState({ editCommentOpen: true })
  }

  closeEditComment= () => this.setState(() => ({ editCommentOpen: false }))

  render(){
    const {comment} = this.props
    return (

        <div className = 'menu-post'>

          <FormComment isOpen={this.state.editCommentOpen} close={this.closeEditComment} comment={comment}/>

          <button  onClick={() => this.clickDeleteComment(comment.id)}>
              <Trash size={30}/>
          </button>
          <button onClick={() => this.openEditComment()}>
              <Edit size={30}/>
          </button>
          <button onClick={() => this.clickAddVoteComment(comment.id)}>
              <ThumbsOK size={30}/>
          </button>
          <button onClick={() => this.clickRemoveVoteComment(comment.id)}>
              <ThumbsKO size={30}/>
          </button>

        </div>
    );
  }

}

function mapStateToProps(state, ownProps) {
  return {
    comment: ownProps.comment
  }
}

function mapDispatchToProps (dispatch){
  return {
    addVote : (id) => dispatch(addVoteComment(id)),
    removeVote : (id) => dispatch(removeVoteComment(id)),
    removeComment : (id) => dispatch(removeComment(id))
  }
}

export default withRouter(connect (mapStateToProps, mapDispatchToProps) (DetailComment));
