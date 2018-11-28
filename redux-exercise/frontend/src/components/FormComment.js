import React, { Component } from 'react';
import {connect} from 'react-redux'
import { withRouter } from 'react-router'
import Modal from 'react-modal'
import serializeForm from 'form-serialize'
import {createComment, updateComment} from '../actions/comments'


class FormComment extends Component {

  handleSubmit = (event) => {
    event.preventDefault()
    const values = serializeForm(event.target, { hash: true })
    if (this.props.comment){
      this.props.editComment(values)
    } else {
      this.props.addComment(values)
    }
    this.props.close()
  }

  handleClose = () => {
    this.props.close()
  }

  render(){
    const {comment, idUrl} = this.props
    return (
      <Modal
        className='modal'
        overlayClassName='overlay'
        isOpen={this.props.isOpen}
        onRequestClose={this.props.close}
        contentLabel='Modal'
        ariaHideApp={false}
      >
      {(this.props.isOpen) &&
          <form onSubmit={this.handleSubmit}>
            <div className='form-comment'>
              <h2>Comment</h2>
              <div className='field-comment'>
                <label>Author : </label>
                <textarea name='author'defaultValue={comment?comment.author:''}/>
              </div>
              <div className='field-comment'>
                <label>Body : </label>
                <textarea name='body'defaultValue={comment?comment.body:''}/>
              </div>
              <div className='field-comment'>
                <button> {comment?'Edit':'Add'}</button>
                <button onClick={() => this.handleClose()}> Close</button>
              </div>
              <div>
                <input type = 'hidden' name='id' value={comment?comment.id:Date.now()}/>
                <input type = 'hidden' name='parentId' value={comment?comment.parentId:idUrl}/>
                <input type = 'hidden' name='timestamp' value={Date.now()}/>

              </div>
            </div>
        </form>
      }
      </Modal>
    )
  }
}

function mapStateToProps(state, ownProps) {
  return {
    idUrl : ('postId' in ownProps.match.params)?ownProps.match.params.postId:''
  }
}

function mapDispatchToProps (dispatch){
  return {
    addComment : (comment) => dispatch(createComment(comment)),
    editComment : (comment) => dispatch(updateComment(comment))
  }
}


export default withRouter(connect (mapStateToProps, mapDispatchToProps) (FormComment));
