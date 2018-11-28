import React, { Component } from 'react';
import {connect} from 'react-redux'
import { withRouter } from 'react-router'
import Modal from 'react-modal'
import serializeForm from 'form-serialize'
import {createPost, updatePost} from '../actions/posts'


class FormPost extends Component {

  handleSubmit = (event) => {
    event.preventDefault()
    const values = serializeForm(event.target, { hash: true })
    if (this.props.post){
      this.props.editPost(values)
    } else {
      this.props.addPost(values)
    }
    this.props.close()
  }

  handleClose = () => {
    this.props.close()
  }

  render(){
    const {categories, post} = this.props
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
            <div className='form-post'>
              <h2>Post</h2>
              <div className='field-post'>
                <label>Title : </label>
                <textarea name='title' defaultValue={post?post.title:''}/>
              </div>
              <div className='field-post'>
                <label>Author : </label>
                <textarea name='author'defaultValue={post?post.author:''}/>
              </div>
              <div className='field-post'>
                <label>Body : </label>
                <textarea name='body'defaultValue={post?post.body:''}/>
              </div>
              <div className='field-post'>
                <label>Category : </label>
                <select name='category' defaultValue={post?post.category:''}>
                  {Array.isArray(categories) && categories.map(
                    category =>
                    (<option key={category.name}>{category.name}</option>)
                    )
                  }
                </select>
              </div>
              <div className='field-post'>
                <button> {post?'Edit':'Add'}</button>
                <button onClick={() => this.handleClose()}> Close</button>
              </div>
              <div>
                <input type = 'hidden' name='id' value={post?post.id:Date.now()}/>
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
    categories : state.categories
  }
}

function mapDispatchToProps (dispatch){
  return {
    addPost : (post) => dispatch(createPost(post)),
    editPost : (post) => dispatch(updatePost(post))
  }
}


export default withRouter(connect (mapStateToProps, mapDispatchToProps) (FormPost));
